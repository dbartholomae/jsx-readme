/* @jsx MD */
import MD, { render } from "jsx-md";

import { ContributorsList } from "./ContributorsList";

describe("ContributorsList", () => {
  it("renders a list of contributors", async () => {
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
      await render(<ContributorsList contributors={contributors} />)
    ).toContain(
      "[![dbartholomae](https://avatars.githubusercontent.com/u/1?size=100 \"dbartholomae\")](https://github.com/dbartholomae \"dbartholomae\'s GitHub profile\'\")\n" +
      "[![junwen-k](https://avatars.githubusercontent.com/u/2?size=100 \"junwen-k\")](https://github.com/junwen-k \"junwen-k\'s GitHub profile\'\")");
  });

  it("renders nothing when contributors are not provided", async () => {
    expect(await render(<ContributorsList contributors={[]} />)).toBe("");
  });
});
