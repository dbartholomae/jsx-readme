"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GithubIssuesBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
var extractGithubOwnerAndRepo_1 = require("./utils/extractGithubOwnerAndRepo");
/** Show a badge with the count of open issues on GitHub */
exports.GithubIssuesBadge = function (_a) {
    var pkg = _a.pkg;
    var ownerAndRepo = extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(pkg.repository);
    if (ownerAndRepo === undefined) {
        return null;
    }
    var owner = ownerAndRepo.owner, repo = ownerAndRepo.repo;
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://github.com/" + owner + "/" + repo + "/issues", imageSource: "https://img.shields.io/github/issues-raw/" + owner + "/" + repo + ".svg" }, "open issues"));
};
