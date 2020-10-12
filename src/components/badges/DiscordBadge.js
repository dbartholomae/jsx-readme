"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DiscordBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
/** Show a discord badge on GitHub */
exports.DiscordBadge = function (_a) {
    var inviteLink = _a.inviteLink, serverId = _a.serverId;
    return (jsx_md_1["default"](Badge_1.Badge, { link: inviteLink, imageSource: "https://img.shields.io/discord/" + serverId }, "chat"));
};
