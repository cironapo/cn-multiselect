import { p as promiseResolve, b as bootstrapLazy } from './index-1da239bf.js';
export { s as setNonce } from './index-1da239bf.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.23.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["cn-multiselect",[[65,"cn-multiselect",{"name":[1],"selectAll":[1028,"select-all"],"selectAllText":[1,"select-all-text"],"deselectAllText":[1,"deselect-all-text"],"disabledItems":[1,"disabled-items"],"options":[1025],"selected":[1025],"title":[1],"placeholderSearch":[1,"placeholder-search"],"disabled":[4],"multiple":[4],"search":[1028],"popup":[1028],"maxSelectedItems":[2,"max-selected-items"],"popupTitle":[1,"popup-title"],"_disabled_items":[32],"_options":[32],"_selected":[32],"open":[32],"searchKey":[32],"selectAllItems":[64],"deselectAllItems":[64]},[[8,"click","clickOutsideHandler"]],{"options":["optionsWatcher"],"disabledItems":["disabledItemsWatcher"],"selected":["selectedWatcher"]}]]]], options);
});
