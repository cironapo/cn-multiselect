---
sidebar_position: 2
---
# TypeScript Interfaces

This documentation describes the TypeScript interfaces used to represent options, styles, and custom data.

---

## `Option`

The `Option` interface represents a generic option that can be used in various applications (e.g., dropdowns, selectors).

### Structure
```typescript
export type Option = {
  value: any;
  label: string;
  image?: string;
  style?: Style;
  data?: Data;
}
```

### Fields

- **`value`** (`any`, required):  
  The value associated with the option. It can be of any type.

- **`label`** (`string`, required):  
  A descriptive string that represents the option.

- **`image`** (`string`, optional):  
  A URL or path to an image associated with the option.

- **`style`** ([`Style`](#style), optional):  
  An object defining the custom style for this option.

- **`data`** ([`Data`](#data), optional):  
  An object for additional data related to the option.

---

## `Style`

The `Style` interface represents customizable styles for an option or element.

### Structure
```typescript
export type Style = {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}
```

### Fields

- **`color`** (`string`, optional):  
  The text color.

- **`backgroundColor`** (`string`, optional):  
  The background color.

- **`borderColor`** (`string`, optional):  
  The border color.

---

## `Data`

The `Data` interface represents a generic object to hold additional data associated with an option.

### Structure
```typescript
export type Data = {
  [key: string]: any
}
```

### Details

- **Dynamic Properties** (`string: any`):  
  Can contain key-value pairs of any type, allowing you to add metadata or other specific information.

---

## Example Usage

```typescript
const option: Option = {
  value: 1,
  label: "Example Option",
  image: "https://example.com/image.png",
  style: {
    color: "white",
    backgroundColor: "blue",
    borderColor: "black"
  },
  data: {
    additionalInfo: "This is an example option"
  }
};
```

This documentation provides a comprehensive overview of the interfaces and includes a practical example for usage.
