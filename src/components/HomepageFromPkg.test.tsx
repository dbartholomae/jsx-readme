/* @jsx Md */
import Md, { render } from "jsx-md";
import { HomepageFromPkg } from "./HomepageFromPkg";

describe("HomepageFromPkg", () => {
  it("renders nothing if there is no homepage", () => {
    const pkg = {
      name: "test-package",
    };
    expect(render(<HomepageFromPkg pkg={pkg} />)).toBe("");
  });

  it("renders a 'Homepage' heading", () => {
    const pkg = {
      homepage: "https://dbartholomae.github.io/jsx-readme",
      name: "test-package",
    };
    expect(render(<HomepageFromPkg pkg={pkg} />)).toContain("##🏠 Homepage\n");
  });

  it("renders sentence with a link to the homepage", () => {
    const pkg = {
      homepage: "https://dbartholomae.github.io/jsx-readme",
      name: "test-package",
    };

    expect(render(<HomepageFromPkg pkg={pkg} />)).toContain(
      "You can find more about this on [https://dbartholomae.github.io/jsx-readme](https://dbartholomae.github.io/jsx-readme).\n"
    );
  });
});
