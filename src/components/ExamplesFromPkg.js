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
exports.ExamplesFromPkg = void 0;
var jsx_md_1 = __importStar(require("jsx-md"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var CodeFile_1 = require("./CodeFile");
/** Show all files from the example directory defined in package.json.² */
exports.ExamplesFromPkg = function (_a) {
    var _b;
    var pkg = _a.pkg, 
    /** The encoding to use for loading all files. */
    _c = _a.encoding, 
    /** The encoding to use for loading all files. */
    encoding = _c === void 0 ? "utf8" : _c, 
    /** Whether to replace all imports from '..' with imports from 'package-name' */
    _d = _a.replacePackageImportsWithPackageName, 
    /** Whether to replace all imports from '..' with imports from 'package-name' */
    replacePackageImportsWithPackageName = _d === void 0 ? true : _d;
    var examplesFolder = (_b = pkg.directories) === null || _b === void 0 ? void 0 : _b.example;
    if (examplesFolder === undefined) {
        return null;
    }
    var filenames = fs.readdirSync(examplesFolder);
    var examples = filenames.map(function (fileName) { return ({
        fileName: fileName,
        content: fs.readFileSync(path.join(examplesFolder, fileName), {
            encoding: encoding
        })
    }); });
    var replacements = replacePackageImportsWithPackageName
        ? [
            {
                find: /from ".."/g,
                replace: "from \"" + pkg.name + "\""
            },
        ]
        : [];
    return (jsx_md_1["default"](jsx_md_1.Fragment, null,
        jsx_md_1["default"](jsx_md_1.Heading, { level: 2 }, "Examples"),
        examples
            .sort(function (_a, _b) {
            var fileNameA = _a.fileName;
            var fileNameB = _b.fileName;
            return fileNameA.localeCompare(fileNameB, "en", { sensitivity: "base" });
        })
            .map(function (_a) {
            var fileName = _a.fileName, content = _a.content;
            return (jsx_md_1["default"](CodeFile_1.CodeFile, { key: fileName, fileName: fileName, replacements: replacements }, content));
        })));
};
