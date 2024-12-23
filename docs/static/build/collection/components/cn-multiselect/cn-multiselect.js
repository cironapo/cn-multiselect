import { h } from "@stencil/core";
/**
 * **cn-multiselect** is a fantastic web component that allows you to integrate a multiselect feature into your web page.
 */
export class CnMultiselect {
    constructor() {
        this.name = undefined;
        this.selectAll = false;
        this.selectAllText = 'Select all';
        this.deselectAllText = 'Deselect all';
        this._disabled_items = [];
        this.disabledItems = undefined;
        this._options = [];
        this.options = undefined;
        this._selected = undefined;
        this.selected = undefined;
        this.title = 'Select option...';
        this.placeholderSearch = 'Search...';
        this.open = false;
        this.disabled = false;
        this.multiple = true;
        this.search = false;
        this.popup = false;
        this.maxSelectedItems = 0;
        this.popupTitle = 'Select option';
        this.searchKey = undefined;
    }
    optionsWatcher(newValue) {
        if (typeof newValue === 'string') {
            this._options = JSON.parse(newValue);
        }
        else {
            this._options = newValue;
        }
    }
    disabledItemsWatcher(newValue) {
        //console.log(newValue,'disabled-items');
        if (typeof newValue === 'string') {
            this._disabled_items = JSON.parse(newValue);
        }
        else {
            this._disabled_items = newValue;
        }
    }
    selectedWatcher(newValue) {
        //console.log(newValue,'selected');
        if (typeof newValue === 'string') {
            this._selected = JSON.parse(newValue);
        }
        else {
            this._selected = newValue;
        }
    }
    //todo
    clickOutsideHandler(ev) {
        if (ev.target === this.el) {
            return;
        }
        //inserire il codice per chiudere la select
        this.open = false;
    }
    componentWillLoad() {
        this.disabledItemsWatcher(this.disabledItems);
        this.optionsWatcher(this.options);
        this.selectedWatcher(this.selected);
        this._internals();
    }
    /**
     * Select all items
     */
    async selectAllItems() {
        let selected = this._options.map(item => item.value).filter(key => {
            return this._disabled_items ? !this._disabled_items.includes(key) : true;
        });
        if (this.maxSelectedItems && this.maxSelectedItems > 0) {
            selected = selected.slice(0, this.maxSelectedItems);
        }
        this._selected = [...selected];
        this.emitChangeValues();
        return;
    }
    /**
    * Deselect all items
    */
    async deselectAllItems() {
        this._selected = [];
        this.emitChangeValues();
        return;
    }
    /*selectInput!: HTMLSelectElement;
    createSelect(el: HTMLSelectElement){
      this.selectInput = el;
      if( this.multiple ){
        this.selectInput.multiple = true;
      }
      this._options.forEach( item => {
        const opt = new Option(item.value,item.key,this._selected.includes(item.key));
        this.selectInput.append(opt);
      })
    }*/
    render() {
        //console.log('rendering');
        const selected = this.getSelectedOptions();
        //console.log(this._selected);
        const options = this.getOptions();
        const css_class = this.disabled ? "cn-multiselect-wrapper disabled" : "cn-multiselect-wrapper";
        let open_options = this.open ? 'options open' : 'options';
        const search = this.search ? this.getSearch() : '';
        if (this.popup) {
            open_options += " popup";
        }
        if (this.search) {
            open_options += " searchable";
        }
        if (this.selectAll && this.multiple) {
            open_options += ' bulks';
        }
        return (h("div", { key: 'e96925eebac046b1ebca8c2722853cd994807e6a', class: css_class }, this.popup
            ? h("div", { class: this.open ? 'overlay show' : 'overlay' })
            : '', h("div", { key: '153fd515b3d91bc83a5eddd06a4de78623651b89', class: "cn-selected-options", onClick: () => this.toggleOptions(), onDrop: event => this.drop(event), onDragOver: event => this.allowDrop(event), onDragEnd: event => this.dragEnd(event) }, selected), h("div", { key: '8dd38f9ba3ea7fd5863ce43885f3e863ef403476', class: "container-options" }, h("div", { key: '6ac2c6a1f965335c09771b6a49baa14c080ec982', class: open_options }, this.popup
            ? h("div", { class: "popup-header" }, h("span", { class: "title" }, this.popupTitle), h("span", { class: "close", onClick: () => this.toggleOptions() }))
            : '', h("div", { key: '9e71f8edf7e38d03013611482847de7a1750b8a4', class: "content-options" }, search, h("div", { key: 'e6bf691e671f664acf53d416f6155f753c370eb0', class: "list-options" }, h("div", { key: 'c6c5362523f70337af3215563293f9ae22e73d59', class: this.search ? 'options-list' : 'options-list no-search' }, options))), this.selectAll ?
            h("div", { class: "bulks" }, h("button", { onClick: () => this.selectAllItems() }, this.selectAllText), h("button", { onClick: () => this.deselectAllItems() }, this.deselectAllText))
            : ''))));
    }
    clickItem(option, event) {
        event.stopPropagation();
        this.clickedSelectedItem.emit(option);
    }
    deselected(option, event) {
        event.stopPropagation();
        if (this.disabled) {
            return;
        }
        const index = this._selected.findIndex(item => item == option.value);
        if (index >= 0) {
            this.deselectedOption.emit(option);
            this._selected.splice(index, 1);
            this._selected = [...this._selected];
        }
        this.emitChangeValues();
    }
    getSelectedOptions() {
        if (this._selected && this._selected.length > 0 && this._options && this._options.length > 0) {
            return this._selected.map(option => {
                const selected = this._options.find(item => item.value == option);
                if (selected) {
                    const _style = selected.style;
                    let style = {};
                    if (_style) {
                        if (_style.backgroundColor) {
                            style['background-color'] = _style.backgroundColor;
                        }
                        if (_style.color) {
                            style['color'] = _style.color;
                        }
                        if (_style.borderColor) {
                            style['border-color'] = _style.borderColor;
                        }
                    }
                    return h("div", { class: "cn-selected-option", style: style, "data-key": selected.value, draggable: true, onDragStart: event => this.drag(event), onClick: event => this.clickItem(selected, event) }, h("span", null, selected.label), h("span", { class: "cn-btn-delete-option", onClick: event => this.deselected(selected, event) }));
                }
            });
        }
        return h("div", { class: "cn-no-values" }, this.title);
    }
    getOptions() {
        if (this._options && this._options.length > 0) {
            const filteredOptions = this._options.map(option => {
                if (this.search && this.searchKey && this.searchKey.length > 2 && !option.label.toLowerCase().match(new RegExp(this.searchKey.toLowerCase()))) {
                    return '';
                }
                else {
                    const checked = this._selected && this._selected.includes(option.value);
                    const disabled = this._disabled_items && this._disabled_items.includes(option.value);
                    return h("div", { class: disabled ? "cn-option disabled" : "cn-option" }, h("label", { class: "pure-material-checkbox" }, checked
                        ? h("input", { type: "checkbox", checked: true, onChange: event => this.toggle(option, event) })
                        : h("input", { type: "checkbox", onChange: event => this.toggle(option, event) }), h("span", null, h("div", null, option.label))));
                }
            });
            return filteredOptions;
        }
        else {
            return '';
        }
    }
    getSearch() {
        return h("div", { class: "search" }, h("span", null, h("input", { placeholder: this.placeholderSearch, ref: (el) => this.searchInput = el, onKeyUp: () => this.searchHandler() }), h("div", { class: (this.searchKey && this.searchKey.length > 0) ? 'search-delete active' : 'search-delete', onClick: () => this.clearSearch() })));
    }
    drop(event) {
        let target = event.target;
        let founded = false;
        if (target.classList.contains('cn-selected-option')) {
            founded = true;
        }
        else {
            if (target.closest('.cn-selected-option')) {
                target = target.closest('.cn-selected-option');
                founded = true;
            }
        }
        let moved = false;
        const data_key = event.dataTransfer.getData("data-key");
        let next_key = null;
        if (founded) {
            //console.log(target);
            const next = target.nextElementSibling;
            if (next && data_key) {
                next_key = next.getAttribute("data-key");
                moved = true;
            }
        }
        if (moved) {
            let new_selected = [];
            const tmp_selected = this._selected.filter(item => item != data_key);
            for (let i = 0; i < tmp_selected.length; i++) {
                const current = this._selected[i];
                if (current == next_key) {
                    if (!new_selected.includes(current)) {
                        new_selected.push(data_key);
                    }
                }
                if (!new_selected.includes(current)) {
                    new_selected.push(current);
                }
            }
            /*this.el.shadowRoot.querySelectorAll('.selected-dragged').forEach((item)=>{
              if( item.classList.contains('cloned-item') ){
                item.remove();
              }else{
                item.classList.remove('selected-dragged');
              }
            })*/
            setTimeout(() => {
                this._selected = [...new_selected];
                this.emitChangeValues();
            }, 100);
        }
        else {
            /*this.el.shadowRoot.querySelectorAll('.selected-dragged').forEach((item)=>{
              item.classList.remove('selected-dragged');
            })*/
        }
        this.el.shadowRoot.querySelectorAll('.draggable').forEach((item) => {
            item.classList.remove('draggable');
        });
        //const item = this.el.shadowRoot.querySelector('.draggable');
        //console.log(item);
        /*console.log(this.el.shadowRoot.querySelectorAll('.cloned-item'));
        this.el.shadowRoot.querySelectorAll('.cloned-item').forEach((item)=>{
          item.remove();
        })*/
        event.preventDefault();
    }
    drag(event) {
        //event.dataTransfer.setData('text/plain', 'dragged-element');
        event.dataTransfer.effectAllowed = 'copy';
        let target = event.target;
        let founded = false;
        if (target.classList.contains('cn-selected-option')) {
            founded = true;
        }
        else {
            if (target.closest('.cn-selected-option')) {
                target = target.closest('.cn-selected-option');
                founded = true;
            }
        }
        if (founded) {
            event.dataTransfer.setData("data-key", target.getAttribute('data-key'));
            target.classList.add('selected-dragged');
        }
        //event.dataTransfer.setData("Text", event.target.id);
        //event.target.style.cursor = "grapping";
        //console.log(event);
        //event.
    }
    dragEnd(event) {
        this.el.shadowRoot.querySelectorAll('.selected-dragged').forEach((item) => {
            item.classList.remove('selected-dragged');
        });
        /*this.el.shadowRoot.querySelectorAll('.cloned-item').forEach((item)=>{
          item.classList.remove('cloned-item');
        })*/
        event.dataTransfer.setData("data-key", null);
    }
    allowDrop(event) {
        let target = event.target;
        let founded = false;
        this.el.shadowRoot.querySelectorAll('.draggable').forEach((item) => {
            item.classList.remove('draggable');
        });
        if (target.classList.contains('cn-selected-option')) {
            founded = true;
        }
        else {
            if (target.parentElement.classList.contains('cn-selected-option')) {
                target = target.parentElement;
                founded = true;
            }
        }
        if (founded) {
            if (target.classList.contains('draggable')) {
                event.preventDefault();
            }
            else {
                if (!target.classList.contains('selected-dragged') && !target.classList.contains('cloned-item')) {
                    target.classList.add('draggable');
                    /*this.el.shadowRoot.querySelectorAll('.cloned-item').forEach((item)=>{
                      item.remove();
                    })
                    target.classList.add('draggable')
                    const _new = this.el.shadowRoot.querySelector('.selected-dragged').cloneNode(true) as HTMLElement;
                    _new.classList.add('cloned-item');
                    _new.classList.remove('selected-item');
          
          
          
                    this.el.shadowRoot.querySelector('.cn-selected-options').insertBefore(_new,target)
                    _new.draggable = true;
                    _new.addEventListener('onDrop', event => this.drop(event));
                    _new.addEventListener('onDragOver', event => this.allowDrop(event));
                    _new.addEventListener('onDragEnd', event => this.dragEnd(event));*/
                    event.preventDefault();
                }
            }
        }
    }
    toggle(option, event) {
        if (this._disabled_items && this._disabled_items.length > 0 && this._disabled_items.includes(option.value)) {
            if (event.target.checked) {
                event.target.checked = false;
            }
            else {
                event.target.checked = true;
            }
            return;
        }
        if (!this._selected)
            this._selected = [];
        let changed = true;
        if (!event.target.checked) {
            const index = this._selected.findIndex(item => item == option.value);
            if (index >= 0) {
                this.selectedOption.emit(option);
                this._selected.splice(index, 1);
                this._selected = [...this._selected];
            }
        }
        else {
            if (!this.multiple) {
                this.selectedOption.emit(option);
                this._selected = [option.value];
            }
            else {
                if (this.maxSelectedItems > 0 && this._selected.length == this.maxSelectedItems) {
                    event.target.checked = false;
                    changed = false;
                }
                else {
                    this.selectedOption.emit(option);
                    this._selected = [...this._selected, option.value];
                }
            }
        }
        if (changed) {
            this.emitChangeValues();
        }
    }
    emitChangeValues() {
        this._internals();
        this.changeValue.emit(this._selected);
    }
    _internals() {
        const formdata = new FormData;
        if (this._selected && this._selected.length > 0) {
            this._selected.forEach(item => {
                formdata.append(this.name, item);
            });
        }
        this.internals.setFormValue(formdata);
    }
    toggleOptions() {
        if (!this.disabled) {
            this.open = !this.open;
        }
    }
    searchHandler() {
        this.searchKey = this.searchInput.value;
    }
    clearSearch() {
        this.searchKey = '';
        this.searchInput.value = '';
    }
    static get is() { return "cn-multiselect"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["cn-multiselect.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["cn-multiselect.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
            },
            "selectAll": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) enable select/deselect all items buttons"
                },
                "getter": false,
                "setter": false,
                "attribute": "select-all",
                "reflect": false,
                "defaultValue": "false"
            },
            "selectAllText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) select all text"
                },
                "getter": false,
                "setter": false,
                "attribute": "select-all-text",
                "reflect": false,
                "defaultValue": "'Select all'"
            },
            "deselectAllText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) deselect all text"
                },
                "getter": false,
                "setter": false,
                "attribute": "deselect-all-text",
                "reflect": false,
                "defaultValue": "'Deselect all'"
            },
            "disabledItems": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) disabled items"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled-items",
                "reflect": false
            },
            "options": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "Option[] | string",
                    "resolved": "Option[] | string",
                    "references": {
                        "Option": {
                            "location": "local",
                            "path": "/Users/cironapo/Desktop/community/stencil/multiselect/src/components/cn-multiselect/cn-multiselect.tsx",
                            "id": "src/components/cn-multiselect/cn-multiselect.tsx::Option"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) options"
                },
                "getter": false,
                "setter": false,
                "attribute": "options",
                "reflect": false
            },
            "selected": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) selected values"
                },
                "getter": false,
                "setter": false,
                "attribute": "selected",
                "reflect": false
            },
            "title": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) title"
                },
                "getter": false,
                "setter": false,
                "attribute": "title",
                "reflect": false,
                "defaultValue": "'Select option...'"
            },
            "placeholderSearch": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) search's placeholder"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder-search",
                "reflect": false,
                "defaultValue": "'Search...'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) disable multiselect"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "multiple": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) enable multi values"
                },
                "getter": false,
                "setter": false,
                "attribute": "multiple",
                "reflect": false,
                "defaultValue": "true"
            },
            "search": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) enable search"
                },
                "getter": false,
                "setter": false,
                "attribute": "search",
                "reflect": false,
                "defaultValue": "false"
            },
            "popup": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) popup mode"
                },
                "getter": false,
                "setter": false,
                "attribute": "popup",
                "reflect": false,
                "defaultValue": "false"
            },
            "maxSelectedItems": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) max selected items"
                },
                "getter": false,
                "setter": false,
                "attribute": "max-selected-items",
                "reflect": false,
                "defaultValue": "0"
            },
            "popupTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "(optional) popup title"
                },
                "getter": false,
                "setter": false,
                "attribute": "popup-title",
                "reflect": false,
                "defaultValue": "'Select option'"
            }
        };
    }
    static get states() {
        return {
            "_disabled_items": {},
            "_options": {},
            "_selected": {},
            "open": {},
            "searchKey": {}
        };
    }
    static get events() {
        return [{
                "method": "changeValue",
                "name": "changeValue",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "(optional) event on change selected options. Return the option keys."
                },
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                }
            }, {
                "method": "clickedSelectedItem",
                "name": "clickedSelectedItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "(optional) event triggered when click on selected option"
                },
                "complexType": {
                    "original": "Option",
                    "resolved": "{ value: any; label: string; style?: Style; data?: Data; }",
                    "references": {
                        "Option": {
                            "location": "local",
                            "path": "/Users/cironapo/Desktop/community/stencil/multiselect/src/components/cn-multiselect/cn-multiselect.tsx",
                            "id": "src/components/cn-multiselect/cn-multiselect.tsx::Option"
                        }
                    }
                }
            }, {
                "method": "selectedOption",
                "name": "selectedOption",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "(optional) event on seleted option"
                },
                "complexType": {
                    "original": "Option",
                    "resolved": "{ value: any; label: string; style?: Style; data?: Data; }",
                    "references": {
                        "Option": {
                            "location": "local",
                            "path": "/Users/cironapo/Desktop/community/stencil/multiselect/src/components/cn-multiselect/cn-multiselect.tsx",
                            "id": "src/components/cn-multiselect/cn-multiselect.tsx::Option"
                        }
                    }
                }
            }, {
                "method": "deselectedOption",
                "name": "deselectedOption",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "(optional) event on deseleted option"
                },
                "complexType": {
                    "original": "Option",
                    "resolved": "{ value: any; label: string; style?: Style; data?: Data; }",
                    "references": {
                        "Option": {
                            "location": "local",
                            "path": "/Users/cironapo/Desktop/community/stencil/multiselect/src/components/cn-multiselect/cn-multiselect.tsx",
                            "id": "src/components/cn-multiselect/cn-multiselect.tsx::Option"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "selectAllItems": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Select all items",
                    "tags": []
                }
            },
            "deselectAllItems": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Deselect all items",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "options",
                "methodName": "optionsWatcher"
            }, {
                "propName": "disabledItems",
                "methodName": "disabledItemsWatcher"
            }, {
                "propName": "selected",
                "methodName": "selectedWatcher"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "clickOutsideHandler",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
