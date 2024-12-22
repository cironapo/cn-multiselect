---
sidebar_position: 1
---
# Documentation



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                         | Type                 | Default              |
| ------------------- | -------------------- | --------------------------------------------------- | -------------------- | -------------------- |
| `deselectAllText`   | `deselect-all-text`  | (optional) deselect all text                        | `string`             | `'Deselect all'`     |
| `disabled`          | `disabled`           | (optional) disable multiselect                      | `boolean`            | `false`              |
| `disabledItems`     | `disabled-items`     | (optional) disabled items                           | `any[] \| string`    | `undefined`          |
| `maxSelectedItems`  | `max-selected-items` | (optional) max selected items                       | `number`             | `0`                  |
| `multiple`          | `multiple`           | (optional) enable multi values                      | `boolean`            | `true`               |
| `name`              | `name`               |                                                     | `string`             | `undefined`          |
| `options`           | `options`            | (optional) options                                  | `Option[] \| string` | `undefined`          |
| `placeholderSearch` | `placeholder-search` | (optional) search's placeholder                     | `string`             | `'Search...'`        |
| `popup`             | `popup`              | (optional) popup mode                               | `boolean`            | `false`              |
| `popupTitle`        | `popup-title`        | (optional) popup title                              | `string`             | `'Select option'`    |
| `search`            | `search`             | (optional) enable search                            | `boolean`            | `false`              |
| `selectAll`         | `select-all`         | (optional) enable select/deselect all items buttons | `boolean`            | `true`               |
| `selectAllText`     | `select-all-text`    | (optional) select all text                          | `string`             | `'Select all'`       |
| `selected`          | `selected`           | (optional) selected values                          | `any[] \| string`    | `undefined`          |
| `title`             | `title`              | (optional) title                                    | `string`             | `'Select option...'` |


## Events

| Event                 | Description                                                          | Type                                                                    |
| --------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `changeValue`         | (optional) event on change selected options. Return the option keys. | `CustomEvent<any[]>`                                                    |
| `clickedSelectedItem` | (optional) event triggered when click on selected option             | `CustomEvent<{ key: any; value: string; style?: Style; data?: Data; }>` |
| `deselectedOption`    | (optional) event on deseleted option                                 | `CustomEvent<{ key: any; value: string; style?: Style; data?: Data; }>` |
| `selectedOption`      | (optional) event on seleted option                                   | `CustomEvent<{ key: any; value: string; style?: Style; data?: Data; }>` |


## Methods

### `deselectAllItems() => Promise<void>`

Deselect all items

#### Returns

Type: `Promise<void>`



### `selectAllItems() => Promise<void>`

Select all items

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
