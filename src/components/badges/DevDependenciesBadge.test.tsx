/* @jsx MD */
import MD, { render } from "jsx-md";
import { DevDependenciesBadge } from ".";
import { Badge } from "../Badge";

describe("DevDependenciesBadge", () => {
  it("shows a devDependencies badge if repository is in npm shortform", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(render(<DevDependenciesBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://david-dm.org/dbartholomae/jsx-readme/dev-status.svg"
          link="https://david-dm.org/dbartholomae/jsx-readme?type=dev"
        >
          devDependency status
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<DevDependenciesBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(render(<DevDependenciesBadge pkg={pkg} />)).toBe("");
  });
});
