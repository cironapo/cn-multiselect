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

## 3. Add the Web Component to Your Project

```bash
npm install @cironapo/cn-multiselect --save
```


## 4. Use the Web Component
### 4.1 Declare the Schema for Angular

Angular does not automatically recognize custom Web Component tags. To avoid compilation errors, declare the custom tags in your Angular module. Edit the main module file (app.module.ts) to add the **CUSTOM_ELEMENTS_SCHEMA**:

```typescript title="app.module.ts"
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import '@cironapo/cn-multiselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

### 4.2 Insert the Web Component into HTML
You can now use the Web Component directly in your Angular project’s HTML files. For example, in app.component.html:

```typescript title="app.component.ts"
import { Component, OnInit } from '@angular/core';
import {Option} from '@cironapo/cn-multiselect'
@Component({
  selector: 'app-root',
  template: `
    <label>My custom select</label>
    <cn-multiselect 
      [disabledItems]="disabledItems"
      [selected]="selected"
      [options]="options" 
      (clickedSelectedItem)="clickItem($event)"
      (changeValue)="changeValue($event)"
      (deselectedOption)="deselectedOption($event)"
      (selectedOption)="selectedOption($event)"
      [popup]="true"
      [search]="true"
      [selectAll]="true"
      title="Seleziona opzione"
      ></cn-multiselect>
    
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'test-cironapo-multiselect';
  options : Option[] = [];
  disabledItems: number[] = [1,2,3];
  selected: number[] = [4,5,6];
  ngOnInit(): void {
    let options :Option[] = [];
    for( let k = 0; k < 100; k++ ){
      const color = this._getRandomColor();
      options.push({
        value: k,
        label: `Option ${k}`,
        style: {
          backgroundColor: color,
          borderColor: color
        }

      })
    }
    this.options = [...options];
  }

  changeValue(event: CustomEvent){
    const selected = event.detail;
    console.log(selected, "Selected values")
  }

  clickItem(event: CustomEvent){
    const option = event.detail as Option;
    alert(option.label)
  }

  selectedOption(event: CustomEvent){
    const option = event.detail as Option;
    console.log(option, "Selected option")
  }

  deselectedOption(event: CustomEvent){
    const option = event.detail as Option;
    console.log(option, "Deselected option")
  }

  _getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
```