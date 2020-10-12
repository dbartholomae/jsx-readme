"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NpmVersionBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
/** Display a badge with the most recent version of this package on npm. */
exports.NpmVersionBadge = function (_a) {
    var pkg = _a.pkg;
    if (pkg.private !== undefined && pkg.private) {
        return null;
    }
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://npmjs.org/package/" + pkg.name, imageSource: "https://badge.fury.io/js/" + pkg.name + ".svg" }, "npm package"));
};
