---
sidebar_position: 1
---
# Documentation



<!-- Auto Generated Below -->


## Overview

**cn-multiselect** is a fantastic web component that allows you to integrate a multiselect feature into your web page.

## Usage

### Cn-multiselect-usage

This component is used to provide a way to greet a user using their first, middle, and last name.
This component will properly format the provided name, even when all fields aren't provided:

```html
<cn-mutliselect 
  title="Select your favourite fruit"
  options='[{"value":"apple","label","Apple"},{"value":"banana","label","Banana"}]'>
</cn-mutliselect>
```



## Properties

| Property             | Attribute              | Description                                                                             | Type                 | Default              |
| -------------------- | ---------------------- | --------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| `deselectAllText`    | `deselect-all-text`    | (optional) deselect all text                                                            | `string`             | `'Deselect all'`     |
| `disabled`           | `disabled`             | (optional) disable multiselect                                                          | `boolean`            | `false`              |
| `disabledItems`      | `disabled-items`       | (optional) disabled items                                                               | `any[] \| string`    | `undefined`          |
| `maxSelectedItems`   | `max-selected-items`   | (optional) max selected items                                                           | `number`             | `0`                  |
| `multiple`           | `multiple`             | (optional) enable multi values                                                          | `boolean`            | `true`               |
| `name`               | `name`                 |                                                                                         | `string`             | `undefined`          |
| `options`            | `options`              | (optional) options                                                                      | `Option[] \| string` | `undefined`          |
| `placeholderSearch`  | `placeholder-search`   | (optional) search's placeholder                                                         | `string`             | `'Search...'`        |
| `popup`              | `popup`                | (optional) force popup mode                                                             | `boolean`            | `false`              |
| `popupBreakingPoint` | `popup-breaking-point` | (optional) popup breaking point. Enable popup mode below specified window size (in px). | `number`             | `undefined`          |
| `popupTitle`         | `popup-title`          | (optional) popup title                                                                  | `string`             | `'Select option'`    |
| `preserveOrder`      | `preserve-order`       | (optional) preserve order in selected items respect the initial order                   | `boolean`            | `false`              |
| `search`             | `search`               | (optional) enable search                                                                | `boolean`            | `false`              |
| `selectAll`          | `select-all`           | (optional) enable select/deselect all items buttons                                     | `boolean`            | `false`              |
| `selectAllText`      | `select-all-text`      | (optional) select all text                                                              | `string`             | `'Select all'`       |
| `selected`           | `selected`             | (optional) selected values                                                              | `any[] \| string`    | `undefined`          |
| `title`              | `title`                | (optional) title                                                                        | `string`             | `'Select option...'` |


## Events

| Event                 | Description                                                          | Type                                                                                      |
| --------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `changeValue`         | (optional) event on change selected options. Return the option keys. | `CustomEvent<any[]>`                                                                      |
| `clickedSelectedItem` | (optional) event triggered when click on selected option             | `CustomEvent<{ value: any; label: string; image?: string; style?: Style; data?: Data; }>` |
| `deselectedOption`    | (optional) event on deseleted option                                 | `CustomEvent<{ value: any; label: string; image?: string; style?: Style; data?: Data; }>` |
| `selectedOption`      | (optional) event on seleted option                                   | `CustomEvent<{ value: any; label: string; image?: string; style?: Style; data?: Data; }>` |


## Methods

### `deselectAllItems() => Promise<void>`

Deselect all items

#### Returns

Type: `Promise<void>`



### `selectAllItems() => Promise<void>`

Select all items

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                                   | Description                         |
| ------------------------------------------------------ | ----------------------------------- |
| `--cn-multiselect-arrow-checkbox-color`                | : color arrow checkbox              |
| `--cn-multiselect-background-color-selected-checkbox`  | background color selected checkbox  |
| `--cn-multiselect-background-color-selected-option`    | background color selected option    |
| `--cn-multiselect-border-color`                        | border color                        |
| `--cn-multiselect-border-color-checkbox`               | border color checkbox               |
| `--cn-multiselect-border-color-selected-checkbox`      | border color selected checkbox      |
| `--cn-multiselect-border-color-selected-option`        | border color selected option        |
| `--cn-multiselect-border-radius`                       | border radius (es. 1px)             |
| `--cn-multiselect-border-size`                         | border size (es. 1px)               |
| `--cn-multiselect-color`                               | font color                          |
| `--cn-multiselect-color-option`                        | font color option                   |
| `--cn-multiselect-color-placeholder`                   | font color selected option          |
| `--cn-multiselect-color-search`                        | font color search text              |
| `--cn-multiselect-color-selected-option`               | font color selected option          |
| `--cn-multiselect-container-background`                | container background                |
| `--cn-multiselect-container-border-color`              | container border color              |
| `--cn-multiselect-container-border-size`               | container border size (es. 1px)     |
| `--cn-multiselect-container-selected-items-min-height` | min height container selected items |
| `--cn-multiselect-font`                                | font family                         |
| `--cn-multiselect-font-size`                           | font size                           |
| `--cn-multiselect-popup-max-width`                     | popup max width                     |
| `--cn-multiselect-popup-overlay-background`            | popup overlay background            |
| `--cn-multiselect-popup-width`                         | popup width                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
