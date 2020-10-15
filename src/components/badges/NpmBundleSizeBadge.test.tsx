/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { NpmBundleSizeBadge } from "./NpmBundleSizeBadge";

describe("NpmBundleSize", () => {
  it("shows an npm bundle size badge", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<NpmBundleSizeBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://img.shields.io/bundlephobia/minzip/package-name.svg"
          link="https://bundlephobia.com/result?p=package-name"
        >
          bundle size
        </Badge>
      )
    );
  });

  it("does not show an npm bundle size badge if the package is private", async () => {
    const pkg = {
      name: "package-name",
      private: true,
    };
    expect(await render(<NpmBundleSizeBadge pkg={pkg} />)).toBe("");
  });
});
