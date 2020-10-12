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
exports.CodeFile = void 0;
var jsx_md_1 = __importStar(require("jsx-md"));
var path = __importStar(require("path"));
/** Displays a code file with a heading and a codeblock. */
exports.CodeFile = function (_a) {
    var 
    /** The file's content. */
    children = _a.children, fileName = _a.fileName, 
    /**
     * A list of replacements to be made in the file's content,
     * e. g. for replacing relative import paths.
     * */
    _b = _a.replacements, 
    /**
     * A list of replacements to be made in the file's content,
     * e. g. for replacing relative import paths.
     * */
    replacements = _b === void 0 ? [] : _b;
    function executeReplacements(str) {
        return replacements.reduce(function (replacedStr, replacement) {
            return replacedStr.replace(replacement.find, replacement.replace);
        }, str);
    }
    return (jsx_md_1["default"](jsx_md_1.Fragment, null,
        jsx_md_1["default"](jsx_md_1.Heading, { level: 3 }, fileName),
        jsx_md_1["default"](jsx_md_1.CodeBlock, { language: path.parse(fileName).ext.slice(1) }, executeReplacements(children.trimEnd())),
        jsx_md_1["default"](jsx_md_1.LineBreak, null)));
};
