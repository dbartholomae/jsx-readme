/* @jsx MD */
import MD, { render } from "jsx-md";
import { DependenciesBadge } from ".";
import { Badge } from "../Badge";

describe("DependenciesBadge", () => {
  it("shows a dependencies badge if repository is in npm shortform", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(render(<DependenciesBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://david-dm.org/dbartholomae/jsx-readme.svg?theme=shields.io"
          link="https://david-dm.org/dbartholomae/jsx-readme"
        >
          dependency status
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<DependenciesBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(render(<DependenciesBadge pkg={pkg} />)).toBe("");
  });
});
