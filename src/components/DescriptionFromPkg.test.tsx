/* @jsx MD */
import MD, { render } from "jsx-md";

import { DescriptionFromPkg } from ".";
import pkg from "../../test/package.json";

describe("DescriptionFromPkg", () => {
  it("renders the package description", () => {
    const description = "This is a description.";
    expect(
      render(<DescriptionFromPkg pkg={{ ...pkg, description }} />)
    ).toContain("This is a description\\.\n");
  });
});
