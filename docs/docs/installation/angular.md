---
sidebar_position: 2
---

# Angular Project

This guide provides step-by-step instructions to integrate a Web Component into an Angular application.

## Prerequisites

- Node.js installed on your machine.
- An existing Angular project.
- Familiarity with Angular concepts and Web Components.

---

## 1. Prepare the Angular Project

Ensure your Angular project is properly set up and up-to-date. If you don’t have an Angular project, you can create one using:

```bash
ng new project-name
cd project-name
```

## 2. Install and Register the Web Components Shim

Angular supports Web Components natively, but a shim might be required for older browsers. Install the @webcomponents/custom-elements package:

```bash
npm install @webcomponents/custom-elements --save
```

Add the shim to the angular.json file under the scripts property:

```json
"scripts": [
  "node_modules/@webcomponents/custom-elements/custom-elements.min.js"
]
```

## 3. Add the Web Component to Your Project
### 3.1 Import the Web Component Package

If the Web Component is distributed as an npm package, install it using:

```bash
npm install cn-multiselect --save
```

### 3.2 Or, Import the Web Component Manually
Copy the file into your project directory, for example, in src/assets/js/.

Add the file to the angular.json file under the scripts property:

```json
"scripts": [
  "src/assets/js/cn-multiselect.js"
]
```

## 4. Use the Web Component
### 4.1 Declare the Schema for Angular

Angular does not automatically recognize custom Web Component tags. To avoid compilation errors, declare the custom tags in your Angular module. Edit the main module file (app.module.ts) to add the CUSTOM_ELEMENTS_SCHEMA:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    // Your Angular components
  ],
  imports: [
    // Your Angular modules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

### 4.2 Insert the Web Component into HTML
You can now use the Web Component directly in your Angular project’s HTML files. For example, in app.component.html:

```html
<cn-multiselect 
  [title]="Select item"
  [select-all]="true"
  [search]="true"
  (changeValue)="myCustomFunction($event)"></cn-multiselect>
```