import { extractGithubOwnerAndRepo } from "./extractGithubOwnerAndRepo";
import { Repository } from "../../../PackageJSON";

describe("extractGithubOwnerAndRepo", () => {
  describe.each(["string", "object"])("with repository as %s", (type) => {
    function createRepository(url: string): Repository | string {
      if (type === "string") {
        return url;
      }
      return {
        type: "git",
        url,
      };
    }

    it("extracts correctly from a shortform", () => {
      const url = "github:dbartholomae/jsx-readme";
      expect(extractGithubOwnerAndRepo(createRepository(url))).toEqual({
        owner: "dbartholomae",
        repo: "jsx-readme",
      });
    });

    it("extracts correctly from an ssh url", () => {
      const url = "git@github.com:dbartholomae/jsx-readme.git";
      expect(extractGithubOwnerAndRepo(createRepository(url))).toEqual({
        owner: "dbartholomae",
        repo: "jsx-readme",
      });
    });

    it("extracts correctly from an https url", () => {
      const url = "https://github.com/dbartholomae/jsx-readme.git";
      expect(extractGithubOwnerAndRepo(createRepository(url))).toEqual({
        owner: "dbartholomae",
        repo: "jsx-readme",
      });
    });
  });
});
