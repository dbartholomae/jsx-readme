/* @jsx MD */
import MD, { render } from "jsx-md";

import { FundingSectionFromPkg } from "./FundingSectionFromPkg";

describe("FundingSectionFromPkg", () => {
  it("renders a 'Show your support' heading", async () => {
    const pkg = {
      name: "test-package",
      funding: "http://example.com/donate",
    };
    expect(await render(<FundingSectionFromPkg pkg={pkg} />)).toContain(
      "## 🤝 Show your support"
    );

    expect(
      await render(
        <FundingSectionFromPkg pkg={pkg} title="Show your support" />
      )
    ).toContain("## Show your support");
  });

  it("renders the description for the section", async () => {
    const pkg = {
      name: "test-package",
      funding: "http://example.com/donate",
    };
    expect(await render(<FundingSectionFromPkg pkg={pkg} />)).toContain(
      "Give a ⭐ if this package helped you! You can also support the development of this package by funding."
    );
  });

  it("renders the package funding with string format", async () => {
    const pkg = {
      name: "test-package",
      funding: "http://example.com/donate",
    };
    expect(await render(<FundingSectionFromPkg pkg={pkg} />)).toContain(
      "\n* [example.com](http://example.com/donate)"
    );
  });

  it("renders the package funding with object format", async () => {
    const pkg = {
      name: "test-package",
      funding: {
        type: "individual",
        url: "http://example.com/donate",
      },
    };
    expect(await render(<FundingSectionFromPkg pkg={pkg} />)).toContain(
      '\n* [example.com](http://example.com/donate "individual")'
    );
  });

  it("renders the package funding with combination of string and object format", async () => {
    const pkg = {
      name: "test-package",
      funding: [
        {
          type: "individual",
          url: "http://example.com/donate",
        },
        "http://example.com/donateAlso",
        {
          type: "patreon",
          url: "https://www.patreon.com/my-account",
        },
      ],
    };
    expect(await render(<FundingSectionFromPkg pkg={pkg} />)).toContain(
      '* [example.com](http://example.com/donate "individual")\n' +
        "* [example.com](http://example.com/donateAlso)\n" +
        '* [www.patreon.com](https://www.patreon.com/my-account "patreon")\n\n\n'
    );
  });

  it("renders nothing if the package has no funding", async () => {
    const pkg = {
      name: "test-package",
    };
    expect(await render(<FundingSectionFromPkg pkg={pkg} />)).toBe("");
  });
});
