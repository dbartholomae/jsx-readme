/* @jsx Md */
import Md, { render } from "jsx-md";
import { ExamplesFromPkg } from "./ExamplesFromPkg";

describe("ExamplesFromPkg", () => {
  it("renders an 'Examples' heading", () => {
    const pkg = {
      name: "test-package",
    };
    expect(render(<ExamplesFromPkg pkg={pkg} />)).toContain("## Examples\n");
  });
});
