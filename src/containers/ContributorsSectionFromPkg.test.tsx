/* @jsx Md */
import Md, { render } from "jsx-md";
import { ContributorsSectionFromPkg } from "./ContributorsSectionFromPkg";

describe("ContributorsSectionFromPkg", () => {
  it("renders nothing if there is no repository", async () => {
    const pkg = {
      name: "test-package",
    };
    expect(await render(<ContributorsSectionFromPkg pkg={pkg} />)).toBe("");
  });

  it("renders contributors table dynamically via GitHub API", async () => {
    const pkg = {
      name: "jsx-readme-test-fixture",
      repository: "github:dbartholomae/jsx-readme-test-fixture",
    };
    expect(await render(<ContributorsSectionFromPkg pkg={pkg} />)).toContain(
      '<table><tr><td align="center"><a title="dbartholomae\'s GitHub profile" href="https://github.com/dbartholomae"><img alt="dbartholomae" src="https://avatars.githubusercontent.com/u/3396992?s=100" width="100px"></a><br /><a title="dbartholomae\'s GitHub profile" href="https://github.com/dbartholomae"><sub><b>dbartholomae</b></sub></a></td><td align="center"><a title="junwen-k\'s GitHub profile" href="https://github.com/junwen-k"><img alt="junwen-k" src="https://avatars.githubusercontent.com/u/40173716?s=100" width="100px"></a><br /><a title="junwen-k\'s GitHub profile" href="https://github.com/junwen-k"><sub><b>junwen-k</b></sub></a></td></tr></table>'
    );
  });
});
