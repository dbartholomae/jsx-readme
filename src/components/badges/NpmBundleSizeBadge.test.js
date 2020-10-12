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
var NpmBundleSizeBadge_1 = require("./NpmBundleSizeBadge");
describe("NpmBundleSize", function () {
    it("shows an npm bundle size badge", function () {
        var pkg = {
            name: "package-name"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](NpmBundleSizeBadge_1.NpmBundleSizeBadge, { pkg: pkg }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://img.shields.io/bundlephobia/minzip/package-name.svg", link: "https://bundlephobia.com/result?p=package-name" }, "bundle size")));
    });
    it("does not show an npm bundle size badge if the package is private", function () {
        var pkg = {
            name: "package-name",
            private: true
        };
        expect(jsx_md_1.render(jsx_md_1["default"](NpmBundleSizeBadge_1.NpmBundleSizeBadge, { pkg: pkg }))).toBe("");
    });
});
