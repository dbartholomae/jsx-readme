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
      '<table><tr><td align="center"><a title="dbartholomae\'s GitHub profile\'" href="https://github.com/dbartholomae"><img alt="dbartholomae" src="https://avatars.githubusercontent.com/u/1?s=100" width="100px"></a><br /><a title="dbartholomae\'s GitHub profile\'" href="https://github.com/dbartholomae"><sub><b>dbartholomae</b></sub></a></td></tr></table>'
    );
  });

  it("renders the number of contributors directly when empty contributors and additional contributors count is provided", async () => {
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
      "This package only works thanks to [all of our contributors (1)](https://github.com/dbartholomae/test-repo/graphs/contributors)"
    );
  });

  it("renders the additional number of contributors when both contributors and additional contributors count are provided", async () => {
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
          additionalContributorsCount={1}
        />
      )
    ).toContain(
      "[+ 1 contributors](https://github.com/dbartholomae/test-repo/graphs/contributors)"
    );
  });
});
