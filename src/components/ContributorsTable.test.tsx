/* @jsx MD */
import MD, { render } from "jsx-md";

import { ContributorsTable } from "./ContributorsTable";

describe("ContributorsTable", () => {
  it("renders a contributors table", async () => {
    const contributors = [
      {
        id: 1,
        name: "dbartholomae",
      },
      {
        id: 2,
        name: "junwen-k",
      },
    ];
    expect(
      await render(<ContributorsTable contributors={contributors} />)
    ).toContain(
      '<table><tr><td align="center"><a title="dbartholomae\'s GitHub profile" href="https://github.com/dbartholomae"><img alt="dbartholomae" src="https://avatars.githubusercontent.com/u/1?s=100" width="100px"></a><br /><a title="dbartholomae\'s GitHub profile" href="https://github.com/dbartholomae"><sub><b>dbartholomae</b></sub></a></td><td align="center"><a title="junwen-k\'s GitHub profile" href="https://github.com/junwen-k"><img alt="junwen-k" src="https://avatars.githubusercontent.com/u/2?s=100" width="100px"></a><br /><a title="junwen-k\'s GitHub profile" href="https://github.com/junwen-k"><sub><b>junwen-k</b></sub></a></td></tr></table>'
    );
  });

  it("renders nothing when contributors are not provided", async () => {
    expect(await render(<ContributorsTable contributors={[]} />)).toBe("");
  });
});
