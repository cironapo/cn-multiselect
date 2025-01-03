import React, { useEffect } from "react";
export default function JavascriptMode() {

  useEffect(
    () => {
      const example = document.getElementById('example');
      example.title = "Select fruits"; // set title
      example.search = true; // enable search
      example.popup = true; // enable popup mode
      example.selectAll = true; // enable select/deselect all actions
      example.popupTitle = 'Select your fruits'; // set popup title
      example.selected = ["apple"]; // set default items
      example.disabledItems = ["ananas"]; //disable items


      const options = [
        {
          value: 'apple',
          label: "Apple"
        },
        {
          value: 'banana',
          label: "Banana"
        },
        {
          value: 'ananas',
          label: "Ananas"
        }
      ];

      example.options = options; // set options
    }
  );
  return (<cn-multiselect id="example"></cn-multiselect>);
}

