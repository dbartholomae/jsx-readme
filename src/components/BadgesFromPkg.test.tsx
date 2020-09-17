/* @jsx MD */
import MD, { render } from "jsx-md";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { GithubIssuesBadge } from "./badges/GithubIssuesBadge";
import { JsxReadmeBadge } from "./badges/JsxReadmeBadge";
import { NpmVersionBadge } from "./badges/NpmVersionBadge";

describe("BadgesFromPkg", () => {
  it("shows an npm version badge by default", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
      render(<NpmVersionBadge pkg={pkg} />)
    );
  });

  describe("with npm-version disabled", () => {
    const overrideBadges = {
      "npm-version": false,
    };

    it("does not show an npm version badge", () => {
      const pkg = {
        name: "package-name",
      };
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(render(<NpmVersionBadge pkg={pkg} />));
    });
  });

  describe("with a github repository", () => {
    const pkg = {
      name: "package-name",
      repository: "git@github.com:dbartholomae/jsx-readme.git",
    };

    it("shows a github-issues badge", () => {
      expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
        render(<GithubIssuesBadge pkg={pkg} />)
      );
    });
  });

  it("shows a jsx-readme badge", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
      render(<JsxReadmeBadge />)
    );
  });

  describe("with jsx-readme disabled", () => {
    const overrideBadges = {
      "jsx-readme": false,
    };

    it("does not show a jsx-readme badge", () => {
      const pkg = {
        name: "package-name",
      };
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(render(<JsxReadmeBadge />));
    });
  });
});
