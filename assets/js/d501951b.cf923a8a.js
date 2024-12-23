"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[548],{9871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>i});const l=JSON.parse('{"id":"examples/custom-css","title":"Custom css","description":"Source","source":"@site/docs/examples/custom-css.mdx","sourceDirName":"examples","slug":"/examples/custom-css","permalink":"/cn-multiselect/docs/examples/custom-css","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/custom-css.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Javascript mode","permalink":"/cn-multiselect/docs/examples/javascript-mode"}}');var n=r(4848),s=r(8453);r(5618),r(6540);function a(){return(0,n.jsx)("cn-multiselect",{style:{"--cn-multiselect-background-color-selected-option":"#2e8555","--cn-multiselect-border-color-selected-option":"#2e8555","--cn-multiselect-border-radius":"5px","--cn-multiselect-background-color-selected-checkbox":"#2e8555","--cn-multiselect-border-color-selected-checkbox":"#2e8555","--cn-multiselect-border-color":"#2e855554","--cn-multiselect-border-color-checkbox":"#2e855554","--cn-multiselect-bulk-actions-button-background-hover":"#2e8555","--cn-multiselect-font":"Verdana","--cn-multiselect-font-size":"22px"},title:"Select country",selected:'["IT","FR"]',search:"true","select-all":"true",options:'[{"value":"IT", "label":"Italy","style":{"backgroundColor":"#5ba9f5","borderColor":"#5ba9f5"}},{"value":"FR", "label":"France"},{"value":"ES", "label":"Spain"}]'})}const c={sidebar_position:3},o="Custom css",u={},i=[{value:"Source",id:"source",level:3},{value:"Output",id:"output",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"custom-css",children:"Custom css"})}),"\n",(0,n.jsx)(t.h3,{id:"source",children:"Source"}),"\n","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'\x3c!-- Custom style --\x3e\n<style>\ncn-multiselect{\n      --cn-multiselect-background-color-selected-option: #2e8555;\n      --cn-multiselect-border-color-selected-option: #2e8555;\n      --cn-multiselect-border-radius: 5px;\n      --cn-multiselect-background-color-selected-checkbox: #2e8555;\n      --cn-multiselect-border-color-selected-checkbox: #2e8555;\n      --cn-multiselect-border-color: #2e855554;\n      --cn-multiselect-border-color-checkbox: #2e855554;\n      --cn-multiselect-bulk-actions-button-background-hover: #2e8555;\n      --cn-multiselect-font: Verdana;\n      --cn-multiselect-font-size: 22px;\n}\n</style>\n\n<cn-multiselect\n    title="Select country"\n    selected=\'["IT"]\'\n    search="true"\n    select-all="true"\n    options=\'[{"value":"IT", "label":"Italy","style":{"backgroundColor":"#5ba9f5","borderColor":"#5ba9f5"}},{"value":"FR", "label":"France"},{"value":"ES", "label":"Spain"}]\'>\n</cn-multiselect>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"output",children:"Output"}),"\n","\n",(0,n.jsx)(a,{})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5618:(e,t,r)=>{r.d(t,{A:()=>V});var l=r(6186),n=r(6540),s=r(4164),a=r(3104),c=r(6347),o=r(205),u=r(7485),i=r(1682),d=r(679);function b(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return b(e).map((e=>{let{props:{value:t,label:r,attributes:l,default:n}}=e;return{value:t,label:r,attributes:l,default:n}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const l=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,s=m(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[u,i]=p({queryString:r,groupId:l}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,d.Dv)(r);return[l,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),v=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),f(e)}),[i,f,s]),tabValues:s}}var v=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function j(e){let{className:t,block:r,selectedValue:l,selectValue:n,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),i=e=>{const t=e.currentTarget,r=o.indexOf(t),s=c[r].value;s!==l&&(u(t),n(s))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>o.push(e),onKeyDown:d,onClick:i,...n,className:(0,s.A)("tabs__item",x.tabItem,n?.className,{"tabs__item--active":l===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function k(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,g.jsx)(k,{...e,children:b(e.children)},String(t))}const S={tabItem:"tabItem_Ymn6"};function I(e){let{children:t,hidden:r,className:l}=e;return(0,g.jsx)("div",{role:"tabpanel",className:(0,s.A)(S.tabItem,l),hidden:r,children:t})}function V(e){let{id:t,component:r,source:n,style:s}=e;return t||(t=Math.random().toString(16).slice(2)),s?(0,g.jsxs)(w,{children:[(0,g.jsx)(I,{value:"source",label:"Source",default:!0,children:(0,g.jsx)(l.A,{language:"jsx",children:`${n}`})}),(0,g.jsx)(I,{value:"style",label:"Style",children:(0,g.jsx)(l.A,{language:"css",children:`${s}`})}),(0,g.jsx)(I,{value:"preview",label:"Preview",children:(0,g.jsxs)("div",{class:"preview-container",id:t||"",children:[(0,g.jsxs)("style",{children:["#"+t," ",s]}),r]})})]}):(0,g.jsxs)(w,{children:[(0,g.jsx)(I,{value:"source",label:"Source",default:!0,children:(0,g.jsx)(l.A,{language:"jsx",children:`${n}`})}),(0,g.jsx)(I,{value:"preview",label:"Preview",children:(0,g.jsx)("div",{class:"preview-container",children:r})})]})}}}]);