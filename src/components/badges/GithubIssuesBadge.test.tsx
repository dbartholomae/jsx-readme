/* @jsx MD */
import MD, { render } from "jsx-md";
import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { Badge } from "../Badge";

describe("GithubIssuesBadge", () => {
  it("shows a github-issues badge if repository is an ssh url", () => {
    const pkg = {
      name: "package-name",
      repository: "git@github.com:dbartholomae/jsx-readme.git",
    };

    expect(render(<GithubIssuesBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg"
          link="https://github.com/dbartholomae/jsx-readme/issues"
        >
          open issues
        </Badge>
      )
    );
  });

  it("shows a github-issues badge if repository is an https url", () => {
    const pkg = {
      name: "package-name",
      repository: "https://github.com/dbartholomae/jsx-readme.git",
    };

    expect(render(<GithubIssuesBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg"
          link="https://github.com/dbartholomae/jsx-readme/issues"
        >
          open issues
        </Badge>
      )
    );
  });

  it("shows a github-issues badge if repository is an ssh url in a repository object", () => {
    const pkg = {
      name: "package-name",
      repository: {
        type: "git",
        url: "git@github.com:dbartholomae/jsx-readme.git",
      },
    };

    expect(render(<GithubIssuesBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg"
          link="https://github.com/dbartholomae/jsx-readme/issues"
        >
          open issues
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<GithubIssuesBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(render(<GithubIssuesBadge pkg={pkg} />)).toBe("");
  });
});
