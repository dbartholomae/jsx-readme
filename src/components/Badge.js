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
exports.Badge = void 0;
var jsx_md_1 = __importStar(require("jsx-md"));
/**
 * Creates a readme badge (linked image).
 * @example
 *   ```js
 *   render(
 *     <Badge
 *       link='https://npmjs.org/package/package-name'
 *       imageSource='https://badge.fury.io/js/package-name.svg'
 *     >
 *       npm package
 *     </Badge>
 *   )
 *   ===
 *   '[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)\n'
 *   ```
 */
exports.Badge = function (_a) {
    var 
    /** The alternative text for the image */
    children = _a.children, imageSource = _a.imageSource, link = _a.link;
    return (jsx_md_1["default"](jsx_md_1.Fragment, null,
        jsx_md_1["default"](jsx_md_1.Link, { to: link },
            jsx_md_1["default"](jsx_md_1.Image, { src: imageSource }, children)),
        jsx_md_1["default"](jsx_md_1.LineBreak, null)));
};
