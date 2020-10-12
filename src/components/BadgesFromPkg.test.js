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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* @jsx MD */
var jsx_md_1 = __importStar(require("jsx-md"));
var BadgesFromPkg_1 = require("./BadgesFromPkg");
var package_json_1 = __importDefault(require("../../examples/package.json"));
describe("BadgesFromPkg", function () {
    it.each(["npmVersion", "jsxReadme", "githubIssues"])("shows an %s badge by default", function (badgeName) {
        var Badge = BadgesFromPkg_1.badgeComponents[badgeName];
        expect(jsx_md_1.render(jsx_md_1["default"](BadgesFromPkg_1.BadgesFromPkg, { pkg: package_json_1["default"] }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge, { pkg: package_json_1["default"] })));
    });
    describe("with all badges disabled", function () {
        var disabledBadges = BadgesFromPkg_1.defaultBadges;
        it("does not show any badge", function () {
            var START_OF_A_BADGE = "[[!";
            expect(jsx_md_1.render(jsx_md_1["default"](BadgesFromPkg_1.BadgesFromPkg, { pkg: package_json_1["default"], disabledBadges: disabledBadges }))).not.toContain(START_OF_A_BADGE);
        });
    });
});
