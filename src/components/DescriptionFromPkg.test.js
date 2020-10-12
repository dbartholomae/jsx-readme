"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* @jsx MD */
var jsx_md_1 = __importStar(require("jsx-md"));
var _1 = require(".");
var package_json_1 = __importDefault(require("../../examples/package.json"));
describe("DescriptionFromPkg", function () {
    it("renders the package description", function () {
        var description = "This is a description.";
        expect(jsx_md_1.render(jsx_md_1["default"](_1.DescriptionFromPkg, { pkg: __assign(__assign({}, package_json_1["default"]), { description: description }) }))).toContain("This is a description\\.\n");
    });
    it("renders nothing if the package has no description", function () {
        var description = undefined;
        expect(jsx_md_1.render(jsx_md_1["default"](_1.DescriptionFromPkg, { pkg: __assign(__assign({}, package_json_1["default"]), { description: description }) }))).toBe("");
    });
});
