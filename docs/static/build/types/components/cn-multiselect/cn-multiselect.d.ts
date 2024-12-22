import { EventEmitter } from '../../stencil-public-runtime';
export type Option = {
    key: any;
    value: string;
    style?: Style;
    data?: Data;
};
export type Style = {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
};
export type Data = {
    [key: string]: any;
};
export declare class CnMultiselect {
    name: string;
    /** (optional) select all text */
    selectAllText: string;
    /** (optional) deselect all text */
    deselectAllText: string;
    internals: ElementInternals;
    el: HTMLElement;
    /** (optional) event on change values */
    changeValues: EventEmitter<any[]>;
    /** (optional) event on click on selected item */
    clickedSelectedItem: EventEmitter<Option>;
    /** (optional) event on seleted item*/
    selectedItem: EventEmitter<Option>;
    /** (optional) event on deseleted item*/
    deselectedItem: EventEmitter<Option>;
    _disabled_items: any[];
    /** (optional) disabled items  */
    disabledItems: any[] | string;
    _options: Option[];
    /** (optional) options */
    options: Option[] | string;
    _selected: any[];
    /** (optional) selected values */
    selected: any[] | string;
    /** (optional) title */
    title: string;
    /** (optional) search's placeholder */
    placeholderSearch: string;
    open: boolean;
    /** (optional) disable multiselect */
    disabled: boolean;
    /** (optional) enable multi values */
    multiple: boolean;
    /** (optional) enable search */
    search: boolean;
    /** (optional) popup mode */
    popup: boolean;
    /** (optional) max selected items  */
    maxSelectedItems: number;
    /** (optional) popup title  */
    popupTitle: string;
    searchInput: HTMLInputElement;
    searchKey: string;
    optionsWatcher(newValue: Option[] | string): void;
    disabledItemsWatcher(newValue: any[] | string): void;
    selectedWatcher(newValue: string[] | string): void;
    clickOutsideHandler(ev: any): void;
    componentWillLoad(): void;
    selectAllItems(): void;
    deselectAllItems(): void;
    render(): any;
    clickItem(option: Option, event: any): void;
    deselected(option: Option, event: any): void;
    private getSelectedOptions;
    private getOptions;
    private getSearch;
    drop(event: any): void;
    drag(event: any): void;
    dragEnd(event: any): void;
    allowDrop(event: any): void;
    toggle(option: Option, event: any): void;
    emitChangeValues(): void;
    _internals(): void;
    toggleOptions(): void;
    searchHandler(): void;
    clearSearch(): void;
}
