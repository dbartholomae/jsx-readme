/* @jsx MD */
import MD, { render } from "jsx-md";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { badges } from "./badges";
import pkg from "../../test/package.json";

describe("BadgesFromPkg", () => {
  it.each(["npmVersion", "jsxReadme", "githubIssues"])(
    "shows an %s badge by default",
    (badgeName) => {
      const Badge = badges[badgeName as keyof typeof badges];

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
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(render(<Badge pkg={pkg} />));
    });
  });
});
