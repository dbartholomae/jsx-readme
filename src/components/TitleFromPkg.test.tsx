/* @jsx MD */
import MD, { render } from "jsx-md";

import { TitleFromPkg } from ".";
import pkg from "../../test/package.json";

describe("TitleFromPkg", () => {
  it("renders the pkg title", () => {
    const name = "package-name";
    expect(render(<TitleFromPkg pkg={{ ...pkg, name }} />)).toContain(
      "# package-name\n"
    );
  });
});
