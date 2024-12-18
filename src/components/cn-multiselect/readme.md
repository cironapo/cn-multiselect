# cn-multiselect



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                     | Type                 | Default              |
| ------------------- | -------------------- | ------------------------------- | -------------------- | -------------------- |
| `disabled`          | `disabled`           | (optional) disable multiselect  | `boolean`            | `false`              |
| `disabledItems`     | --                   |                                 | `any[]`              | `[]`                 |
| `maxSelectedItems`  | `max-selected-items` | (optional) max selected items   | `number`             | `0`                  |
| `multiple`          | `multiple`           | (optional) enable multi values  | `boolean`            | `true`               |
| `name`              | `name`               |                                 | `string`             | `undefined`          |
| `options`           | `options`            | (optional) options              | `Option[] \| string` | `undefined`          |
| `placeholder`       | `placeholder`        | (optional) placeholder          | `string`             | `'Select option...'` |
| `placeholderSearch` | `placeholder-search` | (optional) search's placeholder | `string`             | `'Search...'`        |
| `popup`             | `popup`              | (optional) popup mode           | `boolean`            | `false`              |
| `popupTitle`        | `popup-title`        | (optional) popup title          | `string`             | `'Select option'`    |
| `search`            | `search`             | (optional) enable search        | `boolean`            | `false`              |
| `selected`          | `selected`           | (optional) selected values      | `string \| string[]` | `undefined`          |


## Events

| Event                 | Description                                | Type                                        |
| --------------------- | ------------------------------------------ | ------------------------------------------- |
| `changeValues`        | (optional) event on change values          | `CustomEvent<any[]>`                        |
| `clickedSelectedItem` | (optional) event on click on selected item | `CustomEvent<{ key: any; value: string; }>` |
| `deselectedItem`      | (optional) event on deseleted item         | `CustomEvent<{ key: any; value: string; }>` |
| `selectedItem`        | (optional) event on seleted item           | `CustomEvent<{ key: any; value: string; }>` |


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
| `--cn-multiselect-color-option`                        | font color option                   |
| `--cn-multiselect-color-placeholder`                   | font color selected option          |
| `--cn-multiselect-color-search`                        | font color search text              |
| `--cn-multiselect-color-selected-option`               | font color selected option          |
| `--cn-multiselect-container-background`                | container background                |
| `--cn-multiselect-container-selected-items-min-height` | min height container selected items |
| `--cn-multiselect-font`                                | font family                         |
| `--cn-multiselect-popup-width`                         | popup width                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
