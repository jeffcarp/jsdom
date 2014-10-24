var core = require("./core").dom.living.core;
var html = require("../level2/html").dom.level2.html;

require("../selectors/index").applyQuerySelectorPrototype(html);

exports.dom = { living: { core: core, html: html } };
