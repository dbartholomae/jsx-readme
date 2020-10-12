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
var NpmDownloadsBadge_1 = require("./NpmDownloadsBadge");
var Badge_1 = require("../Badge");
describe("NpmDownloadsBadge", function () {
    it("shows an npm downloads badge", function () {
        var pkg = {
            name: "jsx-readme"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](NpmDownloadsBadge_1.NpmDownloadsBadge, { pkg: pkg }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://img.shields.io/npm/dw/jsx-readme.svg", link: "https://npm-stat.com/charts.html?package=jsx-readme" }, "downloads")));
    });
    it("does not show an npm downloads badge if the package is private", function () {
        var pkg = {
            name: "jsx-readme",
            private: true
        };
        expect(jsx_md_1.render(jsx_md_1["default"](NpmDownloadsBadge_1.NpmDownloadsBadge, { pkg: pkg }))).toBe("");
    });
});
