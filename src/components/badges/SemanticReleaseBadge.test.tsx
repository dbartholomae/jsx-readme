/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { SemanticReleaseBadge } from ".";

describe("SemanticReleaseBadge", () => {
  it("shows a semantic release badge if semantic-release is a devDependency", () => {
    const pkg = {
      name: "package-name",
      devDependencies: {
        "semantic-release": "*",
      },
    };
    expect(render(<SemanticReleaseBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"
          link="https://github.com/semantic-release/semantic-release#badge"
        >
          semantic release
        </Badge>
      )
    );
  });

  it("does not show if semantic-release is not a devDependency", () => {
    const pkg = {
      name: "package-name",
      devDependencies: {},
    };
    expect(render(<SemanticReleaseBadge pkg={pkg} />)).toBe("");
  });

  it("does not show if there are no devDependencies", () => {
    const pkg = {
      name: "package-name",
      devDependencies: undefined,
    };
    expect(render(<SemanticReleaseBadge pkg={pkg} />)).toBe("");
  });
});
