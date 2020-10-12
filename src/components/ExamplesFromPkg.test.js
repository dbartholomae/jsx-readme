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
/* @jsx Md */
var jsx_md_1 = __importStar(require("jsx-md"));
var ExamplesFromPkg_1 = require("./ExamplesFromPkg");
var mock_fs_1 = __importDefault(require("mock-fs"));
var CodeFile_1 = require("./CodeFile");
describe("ExamplesFromPkg", function () {
    describe("with an examples directory with a json file", function () {
        var pkg = {
            name: "test-package",
            directories: {
                example: "examples"
            }
        };
        beforeEach(function () {
            mock_fs_1["default"]({
                examples: {
                    "example.json": "{}"
                }
            });
        });
        afterEach(function () {
            mock_fs_1["default"].restore();
        });
        it("renders an 'Examples' heading", function () {
            expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: pkg }))).toContain("## Examples\n");
        });
        it("renders the example.json file as an ExampleFile", function () {
            expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: pkg }))).toContain(jsx_md_1.render(jsx_md_1["default"](CodeFile_1.CodeFile, { fileName: "example.json" }, "{}")));
        });
        it("with latin1 encoding it renders the example.json file as an ExampleFile", function () {
            expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: pkg, encoding: "latin1" }))).toContain(jsx_md_1.render(jsx_md_1["default"](CodeFile_1.CodeFile, { fileName: "example.json" }, "{}")));
        });
        it("replaces .. imports by imports to the package name", function () {
            mock_fs_1["default"]({
                examples: {
                    "example.ts": 'import something from "..";'
                }
            });
            expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: __assign(__assign({}, pkg), { name: "test-package" }) }))).toContain('import something from "test-package";');
        });
        it("does not replace .. imports if replacePackageImportsWithPackageName is false", function () {
            mock_fs_1["default"]({
                examples: {
                    "example.ts": 'import something from "..";'
                }
            });
            expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: __assign(__assign({}, pkg), { name: "test-package" }), replacePackageImportsWithPackageName: false }))).toContain('import something from "..";');
        });
    });
    describe("with an examples directory 3 files", function () {
        var pkg = {
            name: "test-package",
            directories: {
                example: "examples"
            }
        };
        beforeEach(function () {
            mock_fs_1["default"]({
                examples: {
                    "a.json": "{}",
                    "c.json": "{}",
                    "B.json": "{}"
                }
            });
        });
        afterEach(function () {
            mock_fs_1["default"].restore();
        });
        it("orders the files alphabetically by lower-case", function () {
            expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: pkg }))).toMatch(/.*a\.json.*B\.json.*c\.json.*/s);
        });
    });
    it("renders nothing if directories is not defined", function () {
        var pkg = {
            name: "test-package",
            directories: undefined
        };
        expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: pkg }))).toBe("");
    });
    it("renders nothing if example directory is not defined", function () {
        var pkg = {
            name: "test-package",
            directories: {
                example: undefined
            }
        };
        expect(jsx_md_1.render(jsx_md_1["default"](ExamplesFromPkg_1.ExamplesFromPkg, { pkg: pkg }))).toBe("");
    });
});
