"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
/* @jsx MD */
var jsx_md_1 = __importStar(require("jsx-md"));
var Badge_1 = require("../Badge");
var _1 = require(".");
describe("SemanticReleaseBadge", function () {
    it("shows a semantic release badge if semantic-release is a devDependency", function () {
        var pkg = {
            name: "package-name",
            devDependencies: {
                "semantic-release": "*"
            }
        };
        expect(jsx_md_1.render(jsx_md_1["default"](_1.SemanticReleaseBadge, { pkg: pkg }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg", link: "https://github.com/semantic-release/semantic-release#badge" }, "semantic release")));
    });
    it("does not show if semantic-release is not a devDependency", function () {
        var pkg = {
            name: "package-name",
            devDependencies: {}
        };
        expect(jsx_md_1.render(jsx_md_1["default"](_1.SemanticReleaseBadge, { pkg: pkg }))).toBe("");
    });
    it("does not show if there are no devDependencies", function () {
        var pkg = {
            name: "package-name",
            devDependencies: undefined
        };
        expect(jsx_md_1.render(jsx_md_1["default"](_1.SemanticReleaseBadge, { pkg: pkg }))).toBe("");
    });
});
