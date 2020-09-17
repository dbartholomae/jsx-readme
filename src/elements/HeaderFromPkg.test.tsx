/* @jsx MD */
import MD, { render } from "jsx-md";

import { HeaderFromPkg } from ".";

describe("HeaderFromPkg", () => {
  it("renders the pkg title into the heading", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<HeaderFromPkg pkg={pkg} />)).toContain("# package-name\n");
  });

  it("renders a jsx-readme badge", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<HeaderFromPkg pkg={pkg} />)).toContain(
      "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
    );
  });
});
