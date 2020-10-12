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
/* @jsx Md */
var jsx_md_1 = __importStar(require("jsx-md"));
var CodeFile_1 = require("./CodeFile");
describe("CodeFile", function () {
    it("renders the content of an file in the examples folder defined in package.json", function () {
        expect(jsx_md_1.render(jsx_md_1["default"](CodeFile_1.CodeFile, { fileName: "example.json" }, "{}"))).toContain("```json\n{}\n```");
    });
    it("renders the filename as heading for each example", function () {
        expect(jsx_md_1.render(jsx_md_1["default"](CodeFile_1.CodeFile, { fileName: "example.json" }, "{}\n"))).toContain("### example.json\n");
    });
    it("trims ending new lines from the children", function () {
        expect(jsx_md_1.render(jsx_md_1["default"](CodeFile_1.CodeFile, { fileName: "example.json" }, "{}\n"))).toContain("```json\n{}\n```");
    });
    it("replaces findStr with replaceStr", function () {
        var replacements = [{ find: /\{\}/g, replace: "replacements" }];
        expect(jsx_md_1.render(jsx_md_1["default"](CodeFile_1.CodeFile, { fileName: "example.json", replacements: replacements }, "{}\n"))).toContain("```json\nreplacements\n```");
    });
});
