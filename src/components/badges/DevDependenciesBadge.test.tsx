/* @jsx MD */
import MD, { render } from "jsx-md";
import { DevDependenciesBadge } from ".";
import { Badge } from "../Badge";

describe("DevDependenciesBadge", () => {
  it("shows a devDependencies badge if repository is in npm shortform", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<DevDependenciesBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://david-dm.org/dbartholomae/jsx-readme/dev-status.svg"
          link="https://david-dm.org/dbartholomae/jsx-readme?type=dev"
        >
          devDependency status
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<DevDependenciesBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(await render(<DevDependenciesBadge pkg={pkg} />)).toBe("");
  });
});
