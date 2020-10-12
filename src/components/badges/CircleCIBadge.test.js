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
var CircleCIBadge_1 = require("./CircleCIBadge");
describe("CircleCIBadge", function () {
    it("shows a CircleCIBadge badge with default branch", function () {
        var pkg = {
            name: "package-name",
            repository: "github:circleci/circleci-docs"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](CircleCIBadge_1.CircleCIBadge, { pkg: pkg }))).toBe(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://circleci.com/gh/circleci/circleci-docs.svg?style=svg", link: "https://circleci.com/gh/circleci/circleci-docs" }, "CircleCI")));
    });
    it("links correctly to a non-standard branch", function () {
        var pkg = {
            name: "package-name",
            repository: "github:circleci/circleci-docs"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](CircleCIBadge_1.CircleCIBadge, { pkg: pkg, branch: "teesloane-patch-5" }))).toBe(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5.svg?style=svg", link: "https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5" }, "CircleCI")));
    });
    it("shows nothing if there is no repository", function () {
        var pkg = {
            name: "package-name"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](CircleCIBadge_1.CircleCIBadge, { pkg: pkg }))).toBe("");
    });
    it("shows a CircleCIBadge badge with sheild style", function () {
        var pkg = {
            name: "package-name",
            repository: "github:circleci/circleci-docs"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](CircleCIBadge_1.CircleCIBadge, { pkg: pkg, style: "shield", branch: "teesloane-patch-5" }))).toBe(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5.svg?style=shield", link: "https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5" }, "CircleCI")));
    });
});
