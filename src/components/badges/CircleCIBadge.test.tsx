/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { CircleCIBadge } from "./CircleCIBadge";

describe("CircleCIBadge", () => {
  it("shows a CircleCIBadge badge with default branch", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:circleci/circleci-docs",
    };

    expect(await render(<CircleCIBadge pkg={pkg} />)).toBe(
      await render(
        <Badge
          imageSource="https://circleci.com/gh/circleci/circleci-docs.svg?style=svg"
          link="https://circleci.com/gh/circleci/circleci-docs"
        >
          CircleCI
        </Badge>
      )
    );
  });

  it("links correctly to a non-standard branch", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:circleci/circleci-docs",
    };

    expect(
      await render(<CircleCIBadge pkg={pkg} branch="teesloane-patch-5" />)
    ).toBe(
      await render(
        <Badge
          imageSource="https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5.svg?style=svg"
          link="https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5"
        >
          CircleCI
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<CircleCIBadge pkg={pkg} />)).toBe("");
  });

  it("shows a CircleCIBadge badge with sheild style", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:circleci/circleci-docs",
    };

    expect(
      await render(
        <CircleCIBadge pkg={pkg} style="shield" branch="teesloane-patch-5" />
      )
    ).toBe(
      await render(
        <Badge
          imageSource="https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5.svg?style=shield"
          link="https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5"
        >
          CircleCI
        </Badge>
      )
    );
  });
});
