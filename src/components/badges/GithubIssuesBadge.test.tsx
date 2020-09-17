/* @jsx MD */
import MD, { render } from "jsx-md";
import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { Badge } from "../Badge";

describe("GithubIssuesBadge", () => {
  it("shows a github-issues badge", () => {
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
});
