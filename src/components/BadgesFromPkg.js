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
exports.BadgesFromPkg = exports.defaultBadges = exports.badgeComponents = void 0;
var jsx_md_1 = __importStar(require("jsx-md"));
var badges_1 = require("./badges");
/** @internal */
exports.badgeComponents = {
    npmVersion: badges_1.NpmVersionBadge,
    npmDownloads: badges_1.NpmDownloadsBadge,
    npmBundleSize: badges_1.NpmBundleSizeBadge,
    dependenciesBadge: badges_1.DependenciesBadge,
    devDependenciesBadge: badges_1.DevDependenciesBadge,
    githubTopLanguageBadge: badges_1.GithubTopLanguageBadge,
    githubIssues: badges_1.GithubIssuesBadge,
    jsxReadme: badges_1.JsxReadmeBadge,
    semanticRelease: badges_1.SemanticReleaseBadge
};
/** @internal */
/* This array's order determines the order in which components are displayed */
exports.defaultBadges = [
    "npmVersion",
    "npmDownloads",
    "npmBundleSize",
    "githubIssues",
    "dependenciesBadge",
    "devDependenciesBadge",
    "githubTopLanguageBadge",
    "semanticRelease",
    "jsxReadme",
];
/** Renders a list of badges that can be inferred from `package.json`. */
exports.BadgesFromPkg = function (_a) {
    var pkg = _a.pkg, 
    /**
     * A list of badge names to not include,
     * even if they could be inferred from package.json
     */
    _b = _a.disabledBadges, 
    /**
     * A list of badge names to not include,
     * even if they could be inferred from package.json
     */
    disabledBadges = _b === void 0 ? [] : _b;
    var badgesToRender = exports.defaultBadges.filter(function (badge) { return !disabledBadges.includes(badge); });
    return (jsx_md_1["default"](jsx_md_1.Fragment, null, badgesToRender.map(function (badgeName) {
        var Badge = exports.badgeComponents[badgeName];
        return jsx_md_1["default"](Badge, { key: badgeName, pkg: pkg });
    })));
};
