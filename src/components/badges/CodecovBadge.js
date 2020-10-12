"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CodecovBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
var extractGithubOwnerAndRepo_1 = require("./utils/extractGithubOwnerAndRepo");
/** Display a badge showing code coverage via https://codecov.io/ */
exports.CodecovBadge = function (_a) {
    var pkg = _a.pkg, _b = _a.branch, branch = _b === void 0 ? "main" : _b;
    var ownerAndRepo = extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(pkg.repository);
    if (ownerAndRepo === undefined) {
        return null;
    }
    var owner = ownerAndRepo.owner, repo = ownerAndRepo.repo;
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://codecov.io/gh/" + owner + "/" + repo, imageSource: "https://codecov.io/gh/" + owner + "/" + repo + "/branch/" + branch + "/graph/badge.svg" }, "codecov"));
};
