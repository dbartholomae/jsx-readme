"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CircleCIBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
var extractGithubOwnerAndRepo_1 = require("./utils/extractGithubOwnerAndRepo");
/** Display a badge with the status of CircleCI Build */
exports.CircleCIBadge = function (_a) {
    var branch = _a.branch, _b = _a.style, style = _b === void 0 ? "svg" : _b, pkg = _a.pkg;
    var ownerAndRepo = extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(pkg.repository);
    if (ownerAndRepo === undefined) {
        return null;
    }
    var owner = ownerAndRepo.owner, repo = ownerAndRepo.repo;
    if (branch === undefined) {
        return (jsx_md_1["default"](Badge_1.Badge, { link: "https://circleci.com/gh/" + owner + "/" + repo, imageSource: "https://circleci.com/gh/" + owner + "/" + repo + ".svg?style=" + style }, "CircleCI"));
    }
    else {
        return (jsx_md_1["default"](Badge_1.Badge, { link: "https://circleci.com/gh/" + owner + "/" + repo + "/tree/" + branch, imageSource: "https://circleci.com/gh/" + owner + "/" + repo + "/tree/" + branch + ".svg?style=" + style }, "CircleCI"));
    }
};
