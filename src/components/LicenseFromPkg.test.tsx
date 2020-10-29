/* @jsx Md */
import Md, { render } from "jsx-md";
import { LicenseFromPkg } from "./LicenseFromPkg";

describe("LicenseFromPkg", () => {
  it("renders nothing if there is no license", async () => {
    const pkg = {
      name: "test-package",
    };
    expect(await render(<LicenseFromPkg pkg={pkg} />)).toBe("");
  });

  it("renders a 'License' heading", async () => {
    const pkg = {
      name: "test-package",
      license: "MIT",
    };
    expect(
      await render(<LicenseFromPkg pkg={pkg} title="License" />)
    ).toContain("## License\n");
  });

  it("renders sentence with a link to the license", async () => {
    const pkg = {
      name: "test-package",
      license: "MIT",
    };

    expect(await render(<LicenseFromPkg pkg={pkg} />)).toContain(
      "MIT. See [LICENSE file](./LICENSE) for details.\n"
    );
  });

  it("renders sentence with a custom link to the license", async () => {
    const pkg = {
      name: "test-package",
      license: "MIT",
    };

    expect(
      await render(<LicenseFromPkg pkg={pkg} licenseFilePath="./LICENSE.txt" />)
    ).toContain("MIT. See [LICENSE file](./LICENSE.txt) for details.\n");
  });
});
