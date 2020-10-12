"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LicenseBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
var extractGithubOwnerAndRepo_1 = require("./utils/extractGithubOwnerAndRepo");
/** Display a badge with the license used for a GitHub repository */
exports.LicenseBadge = function (_a) {
    var pkg = _a.pkg, _b = _a.branch, branch = _b === void 0 ? "main" : _b, _c = _a.licenseFileName, licenseFileName = _c === void 0 ? "LICENSE" : _c;
    var ownerAndRepo = extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(pkg.repository);
    if (ownerAndRepo === undefined) {
        return null;
    }
    var owner = ownerAndRepo.owner, repo = ownerAndRepo.repo;
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://github.com/" + owner + "/" + repo + "/blob/" + branch + "/" + licenseFileName, imageSource: "https://img.shields.io/github/license/" + owner + "/" + repo }, "license"));
};
