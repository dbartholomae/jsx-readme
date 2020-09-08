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
});
