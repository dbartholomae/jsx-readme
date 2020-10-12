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
exports.DescriptionFromPkg = void 0;
var jsx_md_1 = __importStar(require("jsx-md"));
/** Displays the descripion from a package.json file. */
exports.DescriptionFromPkg = function (_a) {
    var description = _a.pkg.description;
    if (description === undefined) {
        return null;
    }
    return (jsx_md_1["default"](jsx_md_1.Fragment, null,
        jsx_md_1["default"](jsx_md_1.Text, null, description),
        jsx_md_1["default"](jsx_md_1.LineBreak, null),
        jsx_md_1["default"](jsx_md_1.LineBreak, null)));
};
