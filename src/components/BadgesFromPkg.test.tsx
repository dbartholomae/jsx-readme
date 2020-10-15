/* @jsx MD */
import MD, { render } from "jsx-md";
import { badgeComponents, BadgesFromPkg, defaultBadges } from "./BadgesFromPkg";
import pkg from "../../examples/package.json";

describe("BadgesFromPkg", () => {
  it.each(["npmVersion", "jsxReadme", "githubIssues"] as const)(
    "shows an %s badge by default",
    async (badgeName) => {
      const Badge = badgeComponents[badgeName];

      expect(await render(<BadgesFromPkg pkg={pkg} />)).toContain(
        await render(<Badge pkg={pkg} />)
      );
    }
  );

  describe("with all badges disabled", () => {
    const disabledBadges = defaultBadges;

    it("does not show any badge", async () => {
      const START_OF_A_BADGE = "[[!";
      expect(
        await render(
          <BadgesFromPkg pkg={pkg} disabledBadges={disabledBadges} />
        )
      ).not.toContain(START_OF_A_BADGE);
    });
  });
});
