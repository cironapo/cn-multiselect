import React, { useEffect } from "react";
export default function CustomCss() {

  const style = {
    "--cn-multiselect-background-color-selected-option": '#2e8555',
    "--cn-multiselect-border-color-selected-option": "#2e8555",
    "--cn-multiselect-border-radius": "5px",
    "--cn-multiselect-background-color-selected-checkbox": "#2e8555",
    "--cn-multiselect-border-color-selected-checkbox": "#2e8555",
    "--cn-multiselect-border-color": "#2e855554",
    "--cn-multiselect-border-color-checkbox": "#2e855554",
    "--cn-multiselect-bulk-actions-button-background-hover": "#2e8555",
    "--cn-multiselect-font": "Verdana",
    "--cn-multiselect-font-size": "22px"
  } as React.CSSProperties;

  return (<cn-multiselect style={style}
          title="Select country"
          selected='["IT","FR"]'
          search="true"
          select-all="true"
          options='[{"value":"IT", "label":"Italy","style":{"backgroundColor":"#5ba9f5","borderColor":"#5ba9f5"}},{"value":"FR", "label":"France"},{"value":"ES", "label":"Spain"}]'>
          </cn-multiselect>
  )
}

