/* @jsx MD */
import MD, { render } from "jsx-md";

import { DescriptionFromPkg } from ".";
import pkg from "../../examples/package.json";

describe("DescriptionFromPkg", () => {
  it("renders the package description", () => {
    const description = "This is a description.";
    expect(
      render(<DescriptionFromPkg pkg={{ ...pkg, description }} />)
    ).toContain("This is a description\\.\n");
  });

  it("renders nothing if the package has no description", () => {
    const description = undefined;
    expect(render(<DescriptionFromPkg pkg={{ ...pkg, description }} />)).toBe(
      ""
    );
  });
});
