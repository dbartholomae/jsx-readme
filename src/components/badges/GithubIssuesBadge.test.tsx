/* @jsx MD */
import MD, { render } from "jsx-md";
import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { Badge } from "../Badge";

describe("GithubIssuesBadge", () => {
  it("shows a github-issues badge if repository is in npm shortform", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<GithubIssuesBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg"
          link="https://github.com/dbartholomae/jsx-readme/issues"
        >
          open issues
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<GithubIssuesBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(await render(<GithubIssuesBadge pkg={pkg} />)).toBe("");
  });
});
