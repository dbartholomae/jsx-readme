"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.HacktoberfestBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
var extractGithubOwnerAndRepo_1 = require("./utils/extractGithubOwnerAndRepo");
/** Display a badge showing which open-source projects are participating in Hacktoberfest via https://shields.io/ */
exports.HacktoberfestBadge = function (_a) {
    var pkg = _a.pkg, year = _a.year, _b = _a.suggestionLabel, suggestionLabel = _b === void 0 ? "" : _b;
    var ownerAndRepo = extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(pkg.repository);
    if (ownerAndRepo === undefined) {
        return null;
    }
    var owner = ownerAndRepo.owner, repo = ownerAndRepo.repo;
    var escapedSuggestionLabel = encodeURIComponent(suggestionLabel);
    var imageSource = "https://img.shields.io/github/hacktoberfest/" + year + "/" + owner + "/" + repo + (escapedSuggestionLabel ? "?suggestion_label=" + escapedSuggestionLabel : "");
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://github.com/" + owner + "/" + repo, imageSource: imageSource }, "hacktoberfest badge"));
};
