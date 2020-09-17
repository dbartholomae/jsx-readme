/* @jsx MD */
import MD, { render } from "jsx-md";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { GithubIssuesBadge } from "./badges/GithubIssuesBadge";

describe("BadgesFromPkg", () => {
  it("shows an npm version badge by default", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
      "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)"
    );
  });

  it("does not show an npm version badge if the package is private", () => {
    const pkg = {
      name: "package-name",
      private: true,
    };
    expect(render(<BadgesFromPkg pkg={pkg} />)).not.toContain(
      "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)"
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
      ).not.toContain(
        "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)"
      );
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
      "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
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
      ).not.toContain(
        "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
      );
    });
  });
});
