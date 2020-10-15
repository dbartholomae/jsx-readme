/* @jsx MD */
import MD, { render } from "jsx-md";

import { TitleFromPkg } from ".";
import pkg from "../../examples/package.json";

describe("TitleFromPkg", () => {
  it("renders the pkg title", async () => {
    const name = "package-name";
    expect(await render(<TitleFromPkg pkg={{ ...pkg, name }} />)).toContain(
      "# package-name\n"
    );
  });
});
