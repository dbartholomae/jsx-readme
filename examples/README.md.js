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
var __1 = __importStar(require(".."));
var jsx_md_1 = require("jsx-md");
var package_json_1 = __importDefault(require("./package.json"));
var Readme = function () { return (__1["default"](__1.Fragment, null,
    __1["default"](__1.TitleFromPkg, { pkg: package_json_1["default"] }),
    __1["default"](__1.BadgesFromPkg, { pkg: package_json_1["default"] }),
    __1["default"](__1.CodecovBadge, { pkg: package_json_1["default"] }),
    __1["default"](__1.GithubWorkflowBadge, { pkg: package_json_1["default"], workflowName: "Build and deploy" }),
    __1["default"](__1.DiscordBadge, { inviteLink: "https://discord.com/invite/X9HRSK5", serverId: "750063320614174871" }),
    __1["default"](__1.HacktoberfestBadge, { pkg: package_json_1["default"], year: 2020, suggestionLabel: "good first issue" }),
    __1["default"](jsx_md_1.LineBreak, null),
    __1["default"](__1.DescriptionFromPkg, { pkg: package_json_1["default"] }),
    __1["default"](jsx_md_1.Heading, { level: 2 }, "Installation"),
    "Add ",
    __1["default"](jsx_md_1.InlineCode, null, "jsx-readme"),
    " to your",
    " ",
    __1["default"](jsx_md_1.InlineCode, null, "devDependencies"),
    " and install it. I recommend using it with ",
    __1["default"](jsx_md_1.InlineCode, null, "ts-node"),
    ". Then all you need to do is add a file like in the example below and run it via",
    " ",
    __1["default"](jsx_md_1.InlineCode, null, "ts-node"),
    " whenever you want to create a new version of the ",
    __1["default"](jsx_md_1.InlineCode, null, "README"),
    ".",
    __1["default"](jsx_md_1.LineBreak, null),
    __1["default"](jsx_md_1.LineBreak, null),
    __1["default"](__1.ExamplesFromPkg, { pkg: package_json_1["default"] }),
    __1["default"](__1.HomepageFromPkg, { pkg: package_json_1["default"] }))); };
void __1.renderToFile("./README.md", __1["default"](Readme, null));
