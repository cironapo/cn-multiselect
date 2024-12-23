import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-e237bc1b.js';
export { s as setNonce } from './index-e237bc1b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.23.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["cn-multiselect",[[65,"cn-multiselect",{"name":[1],"selectAll":[1028,"select-all"],"preserveOrder":[1028,"preserve-order"],"selectAllText":[1,"select-all-text"],"deselectAllText":[1,"deselect-all-text"],"disabledItems":[1,"disabled-items"],"options":[1025],"selected":[1025],"title":[1],"placeholderSearch":[1,"placeholder-search"],"disabled":[4],"multiple":[4],"search":[1028],"popup":[1028],"maxSelectedItems":[2,"max-selected-items"],"popupTitle":[1,"popup-title"],"_disabled_items":[32],"_options":[32],"_selected":[32],"open":[32],"searchKey":[32],"selectAllItems":[64],"deselectAllItems":[64]},[[8,"click","clickOutsideHandler"]],{"options":["optionsWatcher"],"disabledItems":["disabledItemsWatcher"],"selected":["selectedWatcher"]}]]]], options);
});
