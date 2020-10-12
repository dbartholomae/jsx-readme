"use strict";
/**
 * @packageDocumentation
 * @internal
 */
exports.__esModule = true;
exports.extractGithubOwnerAndRepo = void 0;
var extractFirstMatch_1 = require("./extractFirstMatch");
function extractGithubOwnerAndRepo(repository) {
    if (repository === undefined) {
        return undefined;
    }
    var url = getUrlFromRepository(repository);
    var SHORTFORM_REGEX = /^github:(?<owner>[-\w]+)\/(?<repo>[-\w]+)$/;
    var SSH_REGEX = /^git@github\.com:(?<owner>[-\w]+)\/(?<repo>[-\w]+)\.git$/;
    var HTTPS_REGEX = /^https:\/\/(?:www\.)?github\.com\/(?<owner>[-\w]+)\/(?<repo>[-\w]+)\.git$/;
    return extractFirstMatch_1.extractFirstMatch(url, [SHORTFORM_REGEX, SSH_REGEX, HTTPS_REGEX]);
}
exports.extractGithubOwnerAndRepo = extractGithubOwnerAndRepo;
function getUrlFromRepository(repository) {
    return typeof repository === "string" ? repository : repository.url;
}
