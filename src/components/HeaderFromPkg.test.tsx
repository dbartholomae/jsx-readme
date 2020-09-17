/* @jsx MD */
import MD, { render } from "jsx-md";

import { HeaderFromPkg } from ".";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { Badge } from "./Badge";

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
      render(
        <Badge
          imageSource="https://img.shields.io/badge/jsx--readme-lightgrey"
          link="https://dbartholomae.github.io/jsx-readme"
        >
          jsx-readme
        </Badge>
      )
    );
  });
});
