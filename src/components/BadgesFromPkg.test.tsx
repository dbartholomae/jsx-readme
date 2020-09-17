/* @jsx MD */
import MD, { render } from "jsx-md";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { badges } from "./badges";

describe("BadgesFromPkg", () => {
  it.each(["npm-version", "jsx-readme", "github-issues"])(
    "shows an %s badge by default",
    (badgeName) => {
      const Badge = badges[badgeName as keyof typeof badges];

      const pkg = {
        name: "package-name",
        repository: "git@github.com:dbartholomae/jsx-readme.git",
      };
      expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
        render(<Badge pkg={pkg} />)
      );
    }
  );

  describe.each(Object.keys(badges))("with %s disabled", (badgeName) => {
    const overrideBadges = {
      [badgeName]: false,
    };

    const Badge = badges[badgeName as keyof typeof badges];

    it(`does not show a ${badgeName} badge`, () => {
      const pkg = {
        name: "package-name",
      };
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(render(<Badge pkg={pkg} />));
    });
  });
});
