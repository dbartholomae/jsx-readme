"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NpmDownloadsBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
/** Display a badge with the weekly downloads on npm of this package. */
exports.NpmDownloadsBadge = function (_a) {
    var pkg = _a.pkg;
    if (pkg.private !== undefined && pkg.private) {
        return null;
    }
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://npm-stat.com/charts.html?package=" + pkg.name, imageSource: "https://img.shields.io/npm/dw/" + pkg.name + ".svg" }, "downloads"));
};
