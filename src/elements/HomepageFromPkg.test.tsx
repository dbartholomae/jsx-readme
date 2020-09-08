/* @jsx Md */
import Md, { render } from "jsx-md";
import { HomepageFromPkg } from "./HomepageFromPkg";

describe("HomepageFromPkg", () => {
  it("renders a 'Homepage' heading", () => {
    const pkg = {
      name: "test-package",
    };
    expect(render(<HomepageFromPkg pkg={pkg} />)).toContain("## Homepage\n");
  });
});
