import { Component, EventEmitter, h, Prop, State, Watch, Event, Listen, Element, AttachInternals, Method } from '@stencil/core';
export type Option = {
  value: any;
  label: string;
  image?: string;
  style?: Style;
  data?: Data;
}
export type Style = {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}
export type Data = {
  [key: string]: any
}
/**
 * **cn-multiselect** is a fantastic web component that allows you to integrate a multiselect feature into your web page.
 */
@Component({
  tag: 'cn-multiselect',
  styleUrl: 'cn-multiselect.scss',
  formAssociated: true,
  shadow: true
})
export class CnMultiselect {
  @Prop() name: string;


  /** (optional) enable select/deselect all items buttons */
  @Prop({ mutable: true }) selectAll: boolean = false;

  /** (optional) preserve order in selected items respect the initial order */
  @Prop({ mutable: true }) preserveOrder: boolean = false;

  /** (optional) select all text */
  @Prop() selectAllText: string = 'Select all';

  /** (optional) deselect all text */
  @Prop() deselectAllText: string = 'Deselect all';



  @AttachInternals() internals: ElementInternals;

  @Element() el: HTMLElement;

  /** (optional) event on change selected options. Return the option keys. */
  @Event() changeValue: EventEmitter<any[]>;

  /** (optional) event triggered when click on selected option */
  @Event() clickedSelectedItem: EventEmitter<Option>;

  /** (optional) event on seleted option*/
  @Event() selectedOption: EventEmitter<Option>;

  /** (optional) event on deseleted option*/
  @Event() deselectedOption: EventEmitter<Option>;

  @State() _disabled_items: any[] = [];
  /** (optional) disabled items  */
  @Prop() disabledItems: any[] | string;


  @State() _options: Option[] = [];
  /** (optional) options */
  @Prop({ mutable: true }) options: Option[] | string;


  @State() _selected: any[];

  /** (optional) selected values */
  @Prop({ mutable: true }) selected: any[] | string;



  /** (optional) title */
  @Prop() title: string = 'Select option...';
  /** (optional) search's placeholder */
  @Prop() placeholderSearch: string = 'Search...';
  @State() open: boolean = false;

  /** (optional) disable multiselect */
  @Prop() disabled: boolean = false;

  /** (optional) enable multi values */
  @Prop() multiple: boolean = true;

  /** (optional) enable search */
  @Prop({ mutable: true }) search: boolean = false;

  /** (optional) popup mode */
  @Prop({ mutable: true }) popup: boolean = false;

  /** (optional) max selected items  */
  @Prop() maxSelectedItems: number = 0;

  /** (optional) popup title  */
  @Prop() popupTitle: string = 'Select option';




  searchInput: HTMLInputElement;
  @State() searchKey: string;

  @Watch('options')
  optionsWatcher(newValue: Option[] | string) {

    if (typeof newValue === 'string') {
      this._options = JSON.parse(newValue);
    }
    else {
      this._options = newValue;
    }
  }

  @Watch('disabledItems')
  disabledItemsWatcher(newValue: any[] | string) {
    //console.log(newValue,'disabled-items');
    if (typeof newValue === 'string') {
      this._disabled_items = JSON.parse(newValue);
    }
    else {
      this._disabled_items = newValue;
    }
  }

  @Watch('selected')
  selectedWatcher(newValue: string[] | string) {
    //console.log(newValue,'selected');
    if (typeof newValue === 'string') {
      this._selected = JSON.parse(newValue);
    }
    else {
      this._selected = newValue;
    }
  }

  //todo
  @Listen('click',{ target: 'window' })
  clickOutsideHandler(ev: any) {

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
  @Method()
  async selectAllItems(){
    if( !this.multiple ) return;
    let selected = this._options.map( item => item.value).filter( key => {
      return this._disabled_items?!this._disabled_items.includes(key): true;
    });
    if( this.maxSelectedItems && this.maxSelectedItems > 0 ){
        selected = selected.slice(0, this.maxSelectedItems)
    }
    this._selected = [...selected]
    this.emitChangeValues();
    return;
  }

  /**
  * Deselect all items
  */
  @Method()
  async deselectAllItems(){
    if( !this.multiple ) return;
    this._selected = []
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
    const css_class = this.disabled?"cn-multiselect-wrapper disabled":"cn-multiselect-wrapper";
    let open_options =  this.open?'options open':'options';
    const search = this.search?this.getSearch(): '';

    if( this.popup ){
      open_options += " popup";
    }
    if( this.search ){
      open_options += " searchable";
    }
    if( this.selectAll && this.multiple){
      open_options += ' bulks';
    }
    if( !this.multiple){
      open_options += ' select-mode';
    }
    return (

        <div class={css_class} >
            {this.popup
                ? <div class={this.open?'overlay show':'overlay'}></div>
                :''
            }
            <div class="cn-selected-options"  onClick={() => this.toggleOptions()}>
            {selected}
            </div>
            <div class="container-options">
              <div class={open_options}>
               {this.popup
                ? <div class="popup-header">
                    <span class="title">{this.popupTitle}</span>
                    <span class="close" onClick={() => this.toggleOptions()}></span>
                </div>
                :''
                }
                <div class="content-options">
                  {search}
                  <div class="list-options">
                    <div class={this.search?'options-list':'options-list no-search'}>
                      {options}
                    </div>
                  </div>
                </div>
                { (this.selectAll && this.multiple)?
                <div class="bulks">
                  <button onClick={() => this.selectAllItems()}>{this.selectAllText}</button>
                  <button onClick={() => this.deselectAllItems()}>{this.deselectAllText}</button>
                </div>
                :''}
              </div>
            </div>
        </div>
    );
  }

  clickItem(option: Option, event: any){
    event.stopPropagation();
    this.clickedSelectedItem.emit(option);
  }

  deselected(option: Option, event: any){
    event.stopPropagation();
    if( this.disabled){
      return;
    }
    const index = this._selected.findIndex( item => item == option.value);
    if( index >= 0){
      this.deselectedOption.emit(option);
      this._selected.splice(index,1);
      this._selected = [...this._selected];
    }
    this.emitChangeValues();
  }

  private getSelectedOptions() {

    if( this._selected && this._selected.length > 0 && this._options && this._options.length > 0 ){
        if( this.preserveOrder ){
          return this._options.map( option => {
            if( this._selected.includes(option.value)){

              const _style = option.style;
              let style = {};
              if( _style ){
                if( _style.backgroundColor ){
                  style['background-color'] = _style.backgroundColor;
                }
                if( _style.color ){
                  style['color'] = _style.color;
                }
                if( _style.borderColor ){
                  style['border-color'] = _style.borderColor;
                }
              }

              return <div class="cn-selected-option" style={style}  data-key={option.value} onClick={event => this.clickItem(option,event)}>
                <span>
                  <div>
                    {option.image?
                    <img src={option.image}/>
                    :''
                    }
                    {option.label}
                  </div>
                </span>
                <span class="cn-btn-delete-option" onClick={event => this.deselected(option,event)}></span>
              </div>
            }
          })

        }else{
          return this._selected.map(option=>{
            const selected = this._options.find( item => item.value == option);
            if( selected ){
              const _style = selected.style;
              let style = {};
              if( _style ){
                if( _style.backgroundColor ){
                  style['background-color'] = _style.backgroundColor;
                }
                if( _style.color ){
                  style['color'] = _style.color;
                }
                if( _style.borderColor ){
                  style['border-color'] = _style.borderColor;
                }
              }

              return <div class="cn-selected-option" style={style}  data-key={selected.value} onClick={event => this.clickItem(selected,event)}>
                <span>{selected.label}</span>
                <span class="cn-btn-delete-option" onClick={event => this.deselected(selected,event)}></span>
              </div>
              }
            }
          )
      }


    }
    return <div class="cn-no-values">{this.title}</div>;
  }

  private getOptions(){
    if( this._options && this._options.length > 0 ){

      const filteredOptions = this._options.map(option=>{
        if( this.search && this.searchKey && this.searchKey.length > 2 && !option.label.toLowerCase().match(new RegExp(this.searchKey.toLowerCase())) ){
            return '';
        }else{
          const checked =  this._selected && this._selected.includes(option.value)
          const disabled = this._disabled_items && this._disabled_items.includes(option.value)
          return <div class={disabled?"cn-option disabled":"cn-option"}>
            <label class="pure-material-checkbox" >
            {checked
              ? <input type="checkbox" checked onChange={event => this.toggle(option,event)}/>
              : <input type="checkbox" onChange={event => this.toggle(option,event)}/>
            }
             <span>
              <div>
                {option.image?
                <img src={option.image}/>
                :''
                }
                {option.label}
              </div>
              </span>
            </label>
          </div>
        }
      })
      return filteredOptions;
    }else{
      return '';
    }

  }

  private getSearch(): HTMLDivElement{
    return <div class="search">
        <span>
          <input placeholder={this.placeholderSearch} ref={(el) => this.searchInput= el as HTMLInputElement} onKeyUp={() => this.searchHandler()}/>
          <div class={(this.searchKey && this.searchKey.length > 0)?'search-delete active':'search-delete'} onClick={() => this.clearSearch()}></div>
        </span>
    </div>
  }

  drop( event: any): void{
    let target = event.target;
    let founded = false;
    if( target.classList.contains('cn-selected-option') ){
      founded = true;
    }else{
      if( target.closest('.cn-selected-option') ){
        target = target.closest('.cn-selected-option');
        founded = true;
      }
    }
    let moved = false;
    const data_key = event.dataTransfer.getData("data-key");
    let next_key = null;
    if( founded ){
      //console.log(target);
      const next = target.nextElementSibling;
      if( next && data_key){
        next_key = next.getAttribute("data-key");
        moved = true;
      }
    }

    if( moved ){
      let new_selected = [];
      const tmp_selected = this._selected.filter( item => item != data_key);

      for( let i=0; i < tmp_selected.length; i++){
        const current = this._selected[i];
        if( current == next_key ){
          if( !new_selected.includes(current) ){
            new_selected.push(data_key);
          }
        }
        if( !new_selected.includes(current) ){
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

    }else{
      /*this.el.shadowRoot.querySelectorAll('.selected-dragged').forEach((item)=>{
        item.classList.remove('selected-dragged');
      })*/
    }

    this.el.shadowRoot.querySelectorAll('.draggable').forEach((item)=>{
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

  drag( event: any): void{
    //event.dataTransfer.setData('text/plain', 'dragged-element');
    event.dataTransfer.effectAllowed = 'copy';
    let target = event.target;
    let founded = false;
    if( target.classList.contains('cn-selected-option') ){
      founded = true;
    }else{
      if( target.closest('.cn-selected-option') ){
        target = target.closest('.cn-selected-option');
        founded = true;
      }
    }



    if( founded ){
      event.dataTransfer.setData("data-key", target.getAttribute('data-key'));
      target.classList.add('selected-dragged');
    }

    //event.dataTransfer.setData("Text", event.target.id);
    //event.target.style.cursor = "grapping";
    //console.log(event);
    //event.
  }

  dragEnd(event: any){
    this.el.shadowRoot.querySelectorAll('.selected-dragged').forEach((item)=>{
      item.classList.remove('selected-dragged');
    })
    /*this.el.shadowRoot.querySelectorAll('.cloned-item').forEach((item)=>{
      item.classList.remove('cloned-item');
    })*/

    event.dataTransfer.setData("data-key",null)
  }

  allowDrop(event: any): void{

    let target = event.target;
    let founded = false;
    this.el.shadowRoot.querySelectorAll('.draggable').forEach((item)=>{
      item.classList.remove('draggable');
    })
    if( target.classList.contains('cn-selected-option') ){
      founded = true;
    }else{
      if( target.parentElement.classList.contains('cn-selected-option') ){
        target = target.parentElement;
        founded = true;
      }
    }

    if( founded ){
      if( target.classList.contains('draggable') ){
        event.preventDefault();
      }else{
        if( !target.classList.contains('selected-dragged') && !target.classList.contains('cloned-item') ){
          target.classList.add('draggable')
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

  toggle(option: Option, event: any): void{
    if( this._disabled_items && this._disabled_items.length > 0 && this._disabled_items.includes(option.value) ){
      if( event.target.checked  ){
        event.target.checked = false;
      }else{
        event.target.checked = true;
      }
      return;
    }

    if( !this._selected ) this._selected = [];
    let changed = true;
    if( !event.target.checked ){
      const index = this._selected.findIndex( item => item == option.value);
      if( index >= 0){
        this.selectedOption.emit(option);
        this._selected.splice(index,1);
        this._selected = [...this._selected];
      }
    }else{
      if( !this.multiple ){
        this.selectedOption.emit(option);
        this._selected = [option.value]
      }else{
        if( this.maxSelectedItems > 0 && this._selected.length == this.maxSelectedItems ){
          event.target.checked = false;
          changed = false;
        }else{
          this.selectedOption.emit(option);
          this._selected = [...this._selected,option.value]
        }

      }
    }
    if( changed ){
      this.emitChangeValues();
    }

  }

  emitChangeValues(){
    this._internals();
    this.changeValue.emit(this._selected);
  }

  _internals(){
    const formdata = new FormData;
    if( this._selected && this._selected.length > 0){
      if( this.preserveOrder ){
        this._options.forEach( item =>{
          if( this._selected.includes(item.value) ){
            formdata.append(this.name,item.value);
          }
        });
      }else{
        this._selected.forEach( item =>{
          formdata.append(this.name,item);
        });

      }
    }
    this.internals.setFormValue(formdata);
  }


  toggleOptions(): void{
    if( !this.disabled){
      this.open=!this.open
    }
  }

  searchHandler(): void{
    this.searchKey = this.searchInput.value;
  }

  clearSearch(): void{
    this.searchKey = '';
    this.searchInput.value= '';
  }

}
