/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { GithubTopLanguageBadge } from "./GithubTopLanguageBadge";

describe("GithubTopLanguageBadge", () => {
  it("shows a github-top-language badge if repository is in npm shortform", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<GithubTopLanguageBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://img.shields.io/github/languages/top/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme"
        >
          GitHub Top language
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<GithubTopLanguageBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(await render(<GithubTopLanguageBadge pkg={pkg} />)).toBe("");
  });
});
