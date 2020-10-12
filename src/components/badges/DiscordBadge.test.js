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
/* @jsx MD */
var jsx_md_1 = __importStar(require("jsx-md"));
var Badge_1 = require("../Badge");
var DiscordBadge_1 = require("./DiscordBadge");
describe("DiscordBadge", function () {
    it("shows a discord badge", function () {
        expect(jsx_md_1.render(jsx_md_1["default"](DiscordBadge_1.DiscordBadge, { serverId: "750063320614174871", inviteLink: "https://discord.com/invite/X9HRSK5" }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { link: "https://discord.com/invite/X9HRSK5", imageSource: "https://img.shields.io/discord/750063320614174871" }, "chat")));
    });
});
