/* @jsx MD */
import MD, { render } from "jsx-md";

import { HeaderFromPkg } from ".";
import { Badge } from "./Badge";
import pkg from "../../test/package.json";
import { JsxReadmeBadge } from "./badges";

describe("HeaderFromPkg", () => {
  it("renders the pkg title into the heading", () => {
    const name = "package-name";
    expect(render(<HeaderFromPkg pkg={{ ...pkg, name }} />)).toContain(
      "# package-name\n"
    );
  });

  it("renders the package description", () => {
    const description = "This is a description.";
    expect(render(<HeaderFromPkg pkg={{ ...pkg, description }} />)).toContain(
      "This is a description\\.\n"
    );
  });

  it("renders a jsx-readme badge", () => {
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
