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
var HomepageFromPkg_1 = require("./HomepageFromPkg");
describe("HomepageFromPkg", function () {
    it("renders nothing if there is no homepage", function () {
        var pkg = {
            name: "test-package"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](HomepageFromPkg_1.HomepageFromPkg, { pkg: pkg }))).toBe("");
    });
    it("renders a 'Homepage' heading", function () {
        var pkg = {
            homepage: "https://dbartholomae.github.io/jsx-readme",
            name: "test-package"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](HomepageFromPkg_1.HomepageFromPkg, { pkg: pkg }))).toContain("## Homepage\n");
    });
    it("renders sentence with a link to the homepage", function () {
        var pkg = {
            homepage: "https://dbartholomae.github.io/jsx-readme",
            name: "test-package"
        };
        expect(jsx_md_1.render(jsx_md_1["default"](HomepageFromPkg_1.HomepageFromPkg, { pkg: pkg }))).toContain("You can find more about this on [https://dbartholomae.github.io/jsx-readme](https://dbartholomae.github.io/jsx-readme).\n");
    });
});
