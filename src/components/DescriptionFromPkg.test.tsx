/* @jsx MD */
import MD, { render } from "jsx-md";

import { DescriptionFromPkg } from ".";
import pkg from "../../examples/package.json";

describe("DescriptionFromPkg", () => {
  it("renders the package description", async () => {
    const description = "This is a description.";
    expect(
      await render(<DescriptionFromPkg pkg={{ ...pkg, description }} />)
    ).toContain("This is a description\\.\n");
  });

  it("renders nothing if the package has no description", async () => {
    const description = undefined;
    expect(
      await render(<DescriptionFromPkg pkg={{ ...pkg, description }} />)
    ).toBe("");
  });
});
