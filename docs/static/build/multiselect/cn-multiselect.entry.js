import { r as registerInstance, a as createEvent, h, g as getElement } from './index-e237bc1b.js';

const cnMultiselectCss = ":host{--cn-multiselect-font:inherit;--cn-multiselect-font-size:inherit;--cn-multiselect-color:#000;--cn-multiselect-border-color:#ccc;--cn-multiselect-border-size:1px;--cn-multiselect-border-radius:0px;--cn-multiselect-background-color-selected-option:#026ed8;--cn-multiselect-border-color-selected-option:#026ed8;--cn-multiselect-color-selected-option:#FFFFFF;--cn-multiselect-color-placeholder:var(--cn-multiselect-color);--cn-multiselect-color-option:var(--cn-multiselect-color);--cn-multiselect-color-search:var(--cn-multiselect-color);--cn-multiselect-border-color-checkbox:#ccc;--cn-multiselect-background-color-selected-checkbox:#026ed8;--cn-multiselect-border-color-selected-checkbox:#026ed8;--cn-multiselect-arrow-checkbox-color:#FFFFFF;--cn-multiselect-container-selected-items-min-height:auto;--cn-multiselect-popup-width:500px;--cn-multiselect-popup-height:calc(100vh - 30px);--cn-multiselect-popup-header-color:var(--cn-multiselect-color);--cn-multiselect-container-background:transparent;--cn-multiselect-bulk-actions-button-background:#FFFFFF;--cn-multiselect-bulk-actions-button-color:var(--cn-multiselect-color);--cn-multiselect-bulk-actions-button-background-hover:#026ed8;--cn-multiselect-bulk-actions-button-color-hover:#FFFFFF}:host *{margin:0;padding:0;box-sizing:border-box}:host select{display:none}:host .overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:2;cursor:pointer;}:host .overlay.show{display:block}:host .cn-multiselect-wrapper{border-radius:var(--cn-multiselect-border-radius);margin:0;border:var(--cn-multiselect-border-size) solid var(--cn-multiselect-border-color);min-height:30px;height:auto;padding:5px;font-size:var(--cn-multiselect-font-size);font-family:var(--cn-multiselect-font);background:var(--cn-multiselect-container-background)}:host .cn-multiselect-wrapper .cn-selected-options{display:flex;cursor:pointer;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;gap:0;padding:0;padding-bottom:1em;height:auto;min-height:var(--cn-multiselect-container-selected-items-min-height)}:host .cn-multiselect-wrapper .cn-selected-options .cn-no-values{margin-top:2px;padding:calc(1px + var(--cn-multiselect-border-size)) 3px;color:var(--cn-multiselect-color-placeholder)}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option{border:var(--cn-multiselect-border-size) solid var(--cn-multiselect-border-color-selected-option);padding:0.1em 2.2em 0.1em 0.1em;border-radius:4px;background-color:var(--cn-multiselect-background-color-selected-option);color:var(--cn-multiselect-color-selected-option);margin-right:0.1em;margin-top:0.2em;position:relative;min-height:1.5em}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option.draggable{opacity:0.6}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option.selected-dragged{opacity:0.2}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option.cloned-item{border-style:dashed;border-color:#ccc;border-width:1px;opacity:0.4;}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option .cn-btn-delete-option{cursor:pointer;position:absolute;top:0.25em;right:0.25em;width:1em;height:1em;opacity:0.3}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option .cn-btn-delete-option:hover{opacity:1}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option .cn-btn-delete-option::before,:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option .cn-btn-delete-option::after{content:\" \";position:absolute;left:0.5em;width:2px;height:1em;background-color:var(--cn-multiselect-color-selected-option)}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option .cn-btn-delete-option::after{transform:rotate(-45deg)}:host .cn-multiselect-wrapper .cn-selected-options .cn-selected-option .cn-btn-delete-option::before{transform:rotate(45deg)}:host .cn-multiselect-wrapper.disabled .selected-options{cursor:default}:host .cn-multiselect-wrapper.disabled .selected-options .cn-selected-option .cn-btn-delete-option{display:none}:host .cn-multiselect-wrapper .container-options{position:relative;width:calc(100% + 10px);margin:0;padding:0;margin-left:-5px}:host .cn-multiselect-wrapper .container-options .options{z-index:2;border-radius:var(--cn-multiselect-border-radius);position:absolute;top:0.8em;width:100%;background-color:#FFFF;border:var(--cn-multiselect-border-size) solid var(--cn-multiselect-border-color);padding:0.25em 0.25em;height:0px;visibility:hidden}:host .cn-multiselect-wrapper .container-options .options .bulks{padding-top:0.25em;width:100%;display:flex;align-items:center;justify-content:space-between}:host .cn-multiselect-wrapper .container-options .options .bulks button{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0.2em 0.25em;font-size:var(--cn-multiselect-font-size);width:calc(50% - 0.25em);border-radius:var(--cn-multiselect-border-radius);background-color:var(--cn-multiselect-bulk-actions-button-background);color:var(--cn-multiselect-bulk-actions-button-color);border:1px solid var(--cn-multiselect-border-color);cursor:pointer}:host .cn-multiselect-wrapper .container-options .options .bulks button:hover{background-color:var(--cn-multiselect-bulk-actions-button-background-hover);color:var(--cn-multiselect-bulk-actions-button-color-hover)}:host .cn-multiselect-wrapper .container-options .options.open{height:auto;visibility:visible}:host .cn-multiselect-wrapper .container-options .options .content-options{position:relative}:host .cn-multiselect-wrapper .container-options .options .content-options .search{position:absolute;top:-2em;left:calc(-1 * var(--cn-multiselect-border-size));width:100%;padding:0.1em 0.25em}:host .cn-multiselect-wrapper .container-options .options .content-options .search input{font-size:1em;width:calc(100% - 2em);height:1.25em;border:none;padding:0px 0.25em;color:var(--cn-multiselect-color-search)}:host .cn-multiselect-wrapper .container-options .options .content-options .search input:focus{outline:none}:host .cn-multiselect-wrapper .container-options .options .content-options .search span{display:flex;width:100%;align-items:center;justify-content:space-between;border-radius:var(--cn-multiselect-border-radius);border:var(--cn-multiselect-border-size) solid var(--cn-multiselect-border-color);height:1.5em;margin-bottom:0.75em}:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete{position:relative}:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete::before,:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete::after{content:\" \";position:absolute;width:2px;height:1em;top:-0.5em;right:0.5em;background-color:var(--cn-multiselect-color-search);opacity:0.3}:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete.active::before,:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete.active::after{opacity:1;cursor:pointer}:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete::before{transform:rotate(45deg)}:host .cn-multiselect-wrapper .container-options .options .content-options .search span .search-delete::after{transform:rotate(-45deg)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list{margin-top:2em;max-height:12em;overflow:auto}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list.no-search{margin-top:0px;overflow:auto}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option{border-bottom:1px solid #cecece96;padding:0.2em 0.2em;}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option:last-child{border-bottom:0px}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option.disabled{opacity:0.5;cursor:none}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox{z-index:0;position:relative;display:inline-block;color:var(--cn-multiselect-color-option);line-height:1.5}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input{appearance:none;-moz-appearance:none;-webkit-appearance:none;z-index:-1;position:absolute;left:-10px;top:-8px;display:block;margin:0;border-radius:50%;width:40px;height:40px;background-color:var(--cn-background-color-checkbox);box-shadow:none;outline:none;opacity:0;transform:scale(1);pointer-events:none;transition:opacity 0.3s, transform 0.2s}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>span{display:inline-block;width:100%;cursor:pointer}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>span::before{left:0;position:absolute;content:\"\";display:inline-block;box-sizing:border-box;margin:0.2em 1em 0.2em 0.1em;border:solid 2px;border-color:var(--cn-multiselect-border-color-checkbox);border-radius:2px;width:1.1em;height:1.1em;vertical-align:top;transition:border-color 0.2s, background-color 0.2s}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>span::after{content:\"\";display:block;position:absolute;top:0.2em;left:0.1em;width:0.9em;height:0.4em;border:solid 0.1em transparent;border-right:none;border-top:none;transform:translate(0.1em, 0.1em) rotate(-45deg)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>span>div{display:inline-block !important;padding-left:2.2em;width:auto}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:checked,:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:indeterminate{background-color:var(--cn-multiselect-background-color-selected-checkbox)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:checked+span::before,:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .cn-multiselect-wrapper .options .option .pure-material-checkbox>input:indeterminate+span::before{border-color:var(--cn-multiselect-border-color-selected-checkbox);background-color:var(--cn-multiselect-background-color-selected-checkbox)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:checked+span::after,:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .options .option .pure-material-checkbox>input:indeterminate+span::after{border-color:var(--cn-multiselect-arrow-checkbox-color)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:indeterminate+span::after{border-left:none;transform:translate(4px, 3px)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox:hover>input{opacity:0.04}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:focus{opacity:0.12}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox:hover>input:focus{opacity:0.16}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:active{opacity:1;transform:scale(0);transition:transform 0s, opacity 0s}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:active+span::before{border-color:rgb(var(--pure-material-primary-rgb, 33, 150, 243))}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:checked:active+span::before{border-color:transparent;background-color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6)}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:disabled{opacity:0}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:disabled+span{color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:disabled+span::before{border-color:currentColor}:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:checked:disabled+span::before,:host .cn-multiselect-wrapper .container-options .options .content-options .options-list .cn-option .pure-material-checkbox>input:indeterminate:disabled+span::before{border-color:transparent;background-color:currentColor}:host .cn-multiselect-wrapper .container-options .options.popup{position:fixed;z-index:3;width:var(--cn-multiselect-popup-width);height:calc(var(--cn-multiselect-popup-height) - 2em) !important;top:50%;left:50%;margin-top:calc(-1 * var(--cn-multiselect-popup-height) / 2.1);margin-bottom:calc(-1 * var(--cn-multiselect-popup-height) / 2.1);margin-left:calc(-1 * var(--cn-multiselect-popup-width) / 2);}:host .cn-multiselect-wrapper .container-options .options.popup.bulks .content-options{height:calc(100% - 2em)}:host .cn-multiselect-wrapper .container-options .options.popup .options-list{max-height:calc(var(--cn-multiselect-popup-height) - 8.2em);overflow-y:auto;height:calc(100vh - 30px)}:host .cn-multiselect-wrapper .container-options .options.popup .search{top:2em}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header{position:absolute;display:flex;justify-content:space-between;font-size:1.1em;height:1.6em;font-weight:700;z-index:4;width:calc(100% - 0.3em);padding-right:1.5em;padding-left:0.5em;color:var(--cn-multiselect-popup-header-color)}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close{cursor:pointer;position:relative}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close::before,:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close::after{content:\" \";position:absolute;left:0.5em;width:3px;height:1em;background-color:var(--cn-multiselect-popup-header-color)}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close.active::before,:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close.active::after{opacity:1;cursor:pointer}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close::before{transform:rotate(45deg)}:host .cn-multiselect-wrapper .container-options .options.popup .popup-header span.close::after{transform:rotate(-45deg)}:host .cn-multiselect-wrapper .container-options .options.popup .list-options{max-height:100%;height:100%;padding:1.8em 0.2em 0.5em}:host .cn-multiselect-wrapper .container-options .options.popup.searchable .list-options{margin-bottom:1.5em;height:calc(100vh - 30px)}";

const CnMultiselect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changeValue = createEvent(this, "changeValue", 7);
        this.clickedSelectedItem = createEvent(this, "clickedSelectedItem", 7);
        this.selectedOption = createEvent(this, "selectedOption", 7);
        this.deselectedOption = createEvent(this, "deselectedOption", 7);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.name = undefined;
        this.selectAll = false;
        this.preserveOrder = false;
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
        if (!this.multiple)
            return;
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
        if (!this.multiple)
            return;
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
        return (h("div", { key: '8b591ff028959fd4ea7021aea63247a02ea6cc76', class: css_class }, this.popup
            ? h("div", { class: this.open ? 'overlay show' : 'overlay' })
            : '', h("div", { key: '9ec3dbb6d005430074c4760dd3d14e00ea454464', class: "cn-selected-options", onClick: () => this.toggleOptions(), onDrop: event => this.drop(event), onDragOver: event => this.allowDrop(event), onDragEnd: event => this.dragEnd(event) }, selected), h("div", { key: '888465365ce59281f761963603f385e2f1788bef', class: "container-options" }, h("div", { key: '1346e378d24489c1b35384b7345102f49563790a', class: open_options }, this.popup
            ? h("div", { class: "popup-header" }, h("span", { class: "title" }, this.popupTitle), h("span", { class: "close", onClick: () => this.toggleOptions() }))
            : '', h("div", { key: 'd4b27514c9b13ee7ece722dfca9dd7ef6a0c1704', class: "content-options" }, search, h("div", { key: '478d7c24172e83fbed09fd01689e3529814a4b41', class: "list-options" }, h("div", { key: 'ba40413233e3cb1a33c499b2cc57ca88c34709bf', class: this.search ? 'options-list' : 'options-list no-search' }, options))), (this.selectAll && this.multiple) ?
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
            if (this.preserveOrder) {
                return this._options.map(option => {
                    if (this._selected.includes(option.value)) {
                        const _style = option.style;
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
                        return h("div", { class: "cn-selected-option", style: style, "data-key": option.value, draggable: true, onDragStart: event => this.drag(event), onClick: event => this.clickItem(option, event) }, h("span", null, option.label), h("span", { class: "cn-btn-delete-option", onClick: event => this.deselected(option, event) }));
                    }
                });
            }
            else {
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
            if (this.preserveOrder) {
                this._options.forEach(item => {
                    if (this._selected.includes(item.value)) {
                        formdata.append(this.name, item.value);
                    }
                });
            }
            else {
                this._selected.forEach(item => {
                    formdata.append(this.name, item);
                });
            }
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
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "options": ["optionsWatcher"],
        "disabledItems": ["disabledItemsWatcher"],
        "selected": ["selectedWatcher"]
    }; }
};
CnMultiselect.style = cnMultiselectCss;

export { CnMultiselect as cn_multiselect };
