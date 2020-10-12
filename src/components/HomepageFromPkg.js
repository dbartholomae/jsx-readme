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
exports.HomepageFromPkg = void 0;
var jsx_md_1 = __importStar(require("jsx-md"));
/** Display a section linking to the homepage defined in package.json */
exports.HomepageFromPkg = function (_a) {
    var homepage = _a.pkg.homepage;
    if (homepage === undefined) {
        return null;
    }
    return (jsx_md_1["default"](jsx_md_1.Fragment, null,
        jsx_md_1["default"](jsx_md_1.Heading, { level: 2 }, "Homepage"),
        "You can find more about this on ",
        jsx_md_1["default"](jsx_md_1.Link, { to: homepage }, homepage),
        ".",
        jsx_md_1["default"](jsx_md_1.LineBreak, null)));
};
