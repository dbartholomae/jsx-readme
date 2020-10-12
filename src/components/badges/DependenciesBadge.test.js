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
var _1 = require(".");
var Badge_1 = require("../Badge");
describe("DependenciesBadge", function () {
    it("shows a dependencies badge if repository is in npm shortform", function () {
        var pkg = {
            name: "package-name",
            repository: "github:dbartholomae/jsx-readme"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](_1.DependenciesBadge, { pkg: pkg }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://david-dm.org/dbartholomae/jsx-readme.svg?theme=shields.io", link: "https://david-dm.org/dbartholomae/jsx-readme" }, "dependency status")));
    });
    it("shows nothing if there is no repository", function () {
        var pkg = {
            name: "package-name"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](_1.DependenciesBadge, { pkg: pkg }))).toBe("");
    });
    it("shows nothing if the repository is a bitbucket repo", function () {
        var pkg = {
            name: "package-name",
            repository: "bitbucket:user/repo"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](_1.DependenciesBadge, { pkg: pkg }))).toBe("");
    });
});
