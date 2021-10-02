/* @jsx MD */
import MD, { render } from "jsx-md";

import { ContributorsSection } from "./ContributorsSection";

describe("ContributorsSection", () => {
  it("renders a 'Contributors' heading", async () => {
    expect(
      await render(
        <ContributorsSection
          contributors={[]}
          title="Contributors"
          owner="dbartholomae"
          repo="test-repo"
        />
      )
    ).toContain("## Contributors");

    expect(
      await render(
        <ContributorsSection
          contributors={[]}
          owner="dbartholomae"
          repo="test-repo"
        />
      )
    ).toContain("## ‍💼 Contributors");
  });

  it("renders sentence with a link to the contributors on GitHub", async () => {
    expect(
      await render(
        <ContributorsSection
          contributors={[]}
          owner="dbartholomae"
          repo="test-repo"
        />
      )
    ).toContain(
      "This package only works thanks to [all of our contributors](https://github.com/dbartholomae/test-repo/graphs/contributors)"
    );
  });

  it("renders a list of contributors on GitHub", async () => {
    const contributors = [
      {
        id: 1,
        name: "dbartholomae",
      },
    ];
    expect(
      await render(
        <ContributorsSection
          contributors={contributors}
          owner="dbartholomae"
          repo="test-repo"
        />
      )
    ).toContain(
      '[![dbartholomae](https://avatars.githubusercontent.com/u/1?size=100 "dbartholomae")](https://github.com/dbartholomae "dbartholomae\'s GitHub profile\'")'
    );
  });

  it("renders a show more contributors link when additional contributors count is provided", async () => {
    expect(
      await render(
        <ContributorsSection
          contributors={[]}
          owner="dbartholomae"
          repo="test-repo"
          additionalContributorsCount={1}
        />
      )
    ).toContain(
      "[+ 1 contributors](https://github.com/dbartholomae/test-repo/graphs/contributors)"
    );
  });
});
