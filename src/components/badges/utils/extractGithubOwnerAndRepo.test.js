"use strict";
/**
 * @packageDocumentation
 * @internal
 */
exports.__esModule = true;
var extractGithubOwnerAndRepo_1 = require("./extractGithubOwnerAndRepo");
describe("extractGithubOwnerAndRepo", function () {
    describe.each(["string", "object"])("with repository as %s", function (type) {
        function createRepository(url) {
            if (type === "string") {
                return url;
            }
            return {
                type: "git",
                url: url
            };
        }
        it("extracts correctly from a shortform", function () {
            var url = "github:dbartholomae/jsx-readme";
            expect(extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(createRepository(url))).toEqual({
                owner: "dbartholomae",
                repo: "jsx-readme"
            });
        });
        it("extracts correctly from an ssh url", function () {
            var url = "git@github.com:dbartholomae/jsx-readme.git";
            expect(extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(createRepository(url))).toEqual({
                owner: "dbartholomae",
                repo: "jsx-readme"
            });
        });
        it("extracts correctly from an https url", function () {
            var url = "https://github.com/dbartholomae/jsx-readme.git";
            expect(extractGithubOwnerAndRepo_1.extractGithubOwnerAndRepo(createRepository(url))).toEqual({
                owner: "dbartholomae",
                repo: "jsx-readme"
            });
        });
    });
});
