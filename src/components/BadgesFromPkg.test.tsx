/* @jsx MD */
import MD, { render } from "jsx-md";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { badges, defaultBadges } from "./badges";
import pkg from "../../test/package.json";
import { GithubWorkflowBadge } from "./badges/GithubWorkflowBadge";

describe("BadgesFromPkg", () => {
  it("allows to set options for GithubWorkflowBadge", () => {
    const overrideBadges = {
      githubWorkflow: {
        workflowName: "Test",
      },
    };

    expect(
      render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
    ).toContain(
      render(
        <GithubWorkflowBadge
          pkg={pkg}
          options={overrideBadges.githubWorkflow}
        />
      )
    );
  });

  // eslint-disable-next-line jest/expect-expect
  it("prevents enabling GithubWorkflowBadge without options", () => {
    render(
      <BadgesFromPkg
        pkg={pkg}
        overrideBadges={{
          // @ts-expect-error - Should be options object
          githubWorkflow: true,
        }}
      />
    );
  });

  it.each(["npmVersion", "jsxReadme", "githubIssues"] as const)(
    "shows an %s badge by default",
    (badgeName) => {
      const Badge = badges[badgeName];

      expect(render(<BadgesFromPkg pkg={pkg} />)).toContain(
        render(<Badge pkg={pkg} />)
      );
    }
  );

  describe("with all badges disabled", () => {
    const overrideBadges = Object.fromEntries(
      Object.keys(defaultBadges).map((key) => [key, true])
    );

    it("does not show any badge", () => {
      const START_OF_A_BADGE = "[[!";
      expect(
        render(<BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />)
      ).not.toContain(START_OF_A_BADGE);
    });
  });
});
