/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { NpmVersionBadge } from "./NpmVersionBadge";

describe("NpmVersionBadge", () => {
  it("shows an npm version badge", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<NpmVersionBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://badge.fury.io/js/package-name.svg"
          link="https://npmjs.org/package/package-name"
        >
          npm package
        </Badge>
      )
    );
  });

  it("does not show an npm version badge if the package is private", () => {
    const pkg = {
      name: "package-name",
      private: true,
    };
    expect(render(<NpmVersionBadge pkg={pkg} />)).not.toContain(
      render(
        <Badge
          imageSource="https://badge.fury.io/js/package-name.svg"
          link="https://npmjs.org/package/package-name"
        >
          npm package
        </Badge>
      )
    );
  });
});
