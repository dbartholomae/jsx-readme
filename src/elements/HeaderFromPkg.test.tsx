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

  it("renders the package description", () => {
    const pkg = {
      name: "package-name",
      description: "This is a description.",
    };
    expect(render(<HeaderFromPkg pkg={pkg} />)).toContain(
      "This is a description\\.\n"
    );
  });

  it("renders a jsx-readme badge", () => {
    const pkg = {
      name: "package-name",
    };
    expect(render(<HeaderFromPkg pkg={pkg} />)).toContain(
      "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
    );
  });

  describe("with jsx-readme disabled", () => {
    const overrideBadges = {
      "jsx-readme": false,
    };

    it("does not render a jsx-readme badge", () => {
      const pkg = {
        name: "package-name",
      };
      expect(
        render(<HeaderFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(
        "[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)\n"
      );
    });
  });
});
