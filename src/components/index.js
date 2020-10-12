"use strict";
/* istanbul ignore file */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.DescriptionFromPkg = exports.TitleFromPkg = exports.HomepageFromPkg = exports.ExamplesFromPkg = exports.BadgesFromPkg = exports.Badge = void 0;
/**
 * @packageDocumentation
 * @internal
 */
__exportStar(require("./badges"), exports);
var Badge_1 = require("./Badge");
__createBinding(exports, Badge_1, "Badge");
var BadgesFromPkg_1 = require("./BadgesFromPkg");
__createBinding(exports, BadgesFromPkg_1, "BadgesFromPkg");
var ExamplesFromPkg_1 = require("./ExamplesFromPkg");
__createBinding(exports, ExamplesFromPkg_1, "ExamplesFromPkg");
var HomepageFromPkg_1 = require("./HomepageFromPkg");
__createBinding(exports, HomepageFromPkg_1, "HomepageFromPkg");
var TitleFromPkg_1 = require("./TitleFromPkg");
__createBinding(exports, TitleFromPkg_1, "TitleFromPkg");
var DescriptionFromPkg_1 = require("./DescriptionFromPkg");
__createBinding(exports, DescriptionFromPkg_1, "DescriptionFromPkg");
