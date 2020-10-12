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
var GithubWorkflowBadge_1 = require("./GithubWorkflowBadge");
describe("GithubWorkflowBadge", function () {
    it("shows a github-workflow badge if repository is in npm shortform", function () {
        var pkg = {
            name: "package-name",
            repository: "github:dbartholomae/jsx-readme"
        };
        var workflowName = "Build and deploy";
        expect(jsx_md_1.render(jsx_md_1["default"](GithubWorkflowBadge_1.GithubWorkflowBadge, { pkg: pkg, workflowName: workflowName }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main", link: 'https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy"' }, "build status")));
    });
    it("shows a github-workflow badge with a non-default branch", function () {
        var pkg = {
            name: "package-name",
            repository: "github:dbartholomae/jsx-readme"
        };
        var branch = "master";
        var workflowName = "Build and deploy";
        expect(jsx_md_1.render(jsx_md_1["default"](GithubWorkflowBadge_1.GithubWorkflowBadge, { pkg: pkg, branch: branch, workflowName: workflowName }))).toContain(jsx_md_1.render(jsx_md_1["default"](Badge_1.Badge, { imageSource: "https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=master", link: 'https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy"' }, "build status")));
    });
    it("shows nothing if there is no repository", function () {
        var pkg = {
            name: "package-name"
        };
        var workflowName = "Build and deploy";
        expect(jsx_md_1.render(jsx_md_1["default"](GithubWorkflowBadge_1.GithubWorkflowBadge, { pkg: pkg, workflowName: workflowName }))).toBe("");
    });
    it("shows nothing if the repository is a bitbucket repo", function () {
        var pkg = {
            name: "package-name",
            repository: "bitbucket:user/repo"
        };
        var workflowName = "Build and deploy";
        expect(jsx_md_1.render(jsx_md_1["default"](GithubWorkflowBadge_1.GithubWorkflowBadge, { pkg: pkg, workflowName: workflowName }))).toBe("");
    });
});
