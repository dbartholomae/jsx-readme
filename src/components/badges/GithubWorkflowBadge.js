"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GithubWorkflowBadge = void 0;
/* @jsx MD */
var jsx_md_1 = __importDefault(require("jsx-md"));
var Badge_1 = require("../Badge");
var extractGithubOwnerAndRepo_1 = require("./utils/extractGithubOwnerAndRepo");
/** Display a badge with the status of a GitHub Workflow */
exports.GithubWorkflowBadge = function (_a) {
    var pkg = _a.pkg, _b = _a.branch, branch = _b === void 0 ? "main" : _b, workflowName = _a.workflowName;
    var ownerAndRepo = extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(pkg.repository);
    if (ownerAndRepo === undefined) {
        return null;
    }
    var owner = ownerAndRepo.owner, repo = ownerAndRepo.repo;
    var escapedWorkflowName = encodeURIComponent(workflowName);
    return (jsx_md_1["default"](Badge_1.Badge, { link: "https://github.com/" + owner + "/" + repo + "/actions?query=workflow%3A\"" + escapedWorkflowName + "\"", imageSource: "https://github.com/" + owner + "/" + repo + "/workflows/" + escapedWorkflowName + "/badge.svg?branch=" + branch }, "build status"));
};
