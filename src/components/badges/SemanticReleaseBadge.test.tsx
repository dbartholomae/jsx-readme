/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { SemanticReleaseBadge } from ".";

describe("SemanticReleaseBadge", () => {
  it("shows a semantic release badge", () => {
    expect(render(<SemanticReleaseBadge />)).toContain(
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
});
