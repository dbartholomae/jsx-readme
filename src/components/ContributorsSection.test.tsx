/* @jsx MD */
import MD, { render } from "jsx-md";

import { ContributorsSection } from "./ContributorsSection";

describe("ContributorsSection", () => {
  it("renders a 'Contributors' heading", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/test-repo",
    };

    expect(
      await render(<ContributorsSection title="Contributors" pkg={pkg} />)
    ).toContain("## Contributors");

    expect(
      await render(<ContributorsSection pkg={pkg} />)
    ).toContain("## ‍💼 Contributors");
  });

  it("renders sentence with a link to the contributors on GitHub", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/test-repo",
    };
    expect(await render(<ContributorsSection pkg={pkg} />)).toContain(
      "This package only works thanks to [all of our contributors](https://github.com/dbartholomae/test-repo/graphs/contributors)"
    );
  });

  it("renders nothing when repository is not hosted on GitHub", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/test-repo",
    };
    expect(await render(<ContributorsSection pkg={pkg} title="Contributors" />)).toBe("")
  });
});
