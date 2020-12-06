"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iconLibrary;

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

function iconLibrary(icons) {
  _fontawesomeSvgCore.library.add(icons.map(function (icon) {
    return icon;
  }));
}