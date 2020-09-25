/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { NpmBundleSizeBadge } from "./NpmBundleSizeBadge";

describe("NpmBundleSize", () => {
  it("shows an npm bundle size badge", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<NpmBundleSizeBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/bundlephobia/minzip/package-name.svg"
          link="https://bundlephobia.com/result?p=package-name"
        >
          bundle size
        </Badge>
      )
    );
  });

  it("does not show an npm bundle size badge if the package is private", () => {
    const pkg = {
      name: "package-name",
      private: true,
    };
    expect(render(<NpmBundleSizeBadge pkg={pkg} />)).toBe("");
  });
});
