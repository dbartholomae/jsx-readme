/* @jsx MD */
import MD, { render } from "jsx-md";

import { HeaderFromPkg } from ".";
import pkg from "../../test/package.json";
import { JsxReadmeBadge } from "./badges";

describe("HeaderFromPkg", () => {
  it("renders the package description", () => {
    const description = "This is a description.";
    expect(render(<HeaderFromPkg pkg={{ ...pkg, description }} />)).toContain(
      "This is a description\\.\n"
    );
  });

  it("renders a jsx-readme badge", () => {
    expect(render(<HeaderFromPkg pkg={pkg} />)).toContain(
      render(<JsxReadmeBadge />)
    );
  });
});
