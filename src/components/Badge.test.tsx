/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders an npm package badge", async () => {
    expect(
      await render(
        <Badge
          link="https://npmjs.org/package/package-name"
          imageSource="https://badge.fury.io/js/package-name.svg"
        >
          npm package
        </Badge>
      )
    ).toBe(
      "[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)\n"
    );
  });
});
