import { EventEmitter } from '../../stencil-public-runtime';
export type Option = {
    value: any;
    label: string;
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
/**
 * **cn-multiselect** is a fantastic web component that allows you to integrate a multiselect feature into your web page.
 */
export declare class CnMultiselect {
    name: string;
    /** (optional) enable select/deselect all items buttons */
    selectAll: boolean;
    /** (optional) preserve order in selected items respect the initial order */
    preserveOrder: boolean;
    /** (optional) select all text */
    selectAllText: string;
    /** (optional) deselect all text */
    deselectAllText: string;
    internals: ElementInternals;
    el: HTMLElement;
    /** (optional) event on change selected options. Return the option keys. */
    changeValue: EventEmitter<any[]>;
    /** (optional) event triggered when click on selected option */
    clickedSelectedItem: EventEmitter<Option>;
    /** (optional) event on seleted option*/
    selectedOption: EventEmitter<Option>;
    /** (optional) event on deseleted option*/
    deselectedOption: EventEmitter<Option>;
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
    /**
     * Select all items
     */
    selectAllItems(): Promise<void>;
    /**
    * Deselect all items
    */
    deselectAllItems(): Promise<void>;
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
