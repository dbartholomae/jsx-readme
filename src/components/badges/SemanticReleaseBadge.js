"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SemanticReleaseBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
/** Display a badge explaining that this repo uses https://github.com/semantic-release/semantic-release */
exports.SemanticReleaseBadge = function (_a) {
    var _b;
    var pkg = _a.pkg;
    if (((_b = pkg.devDependencies) === null || _b === void 0 ? void 0 : _b["semantic-release"]) === undefined) {
        return null;
    }
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://github.com/semantic-release/semantic-release#badge", imageSource: "https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" }, "semantic release"));
};
