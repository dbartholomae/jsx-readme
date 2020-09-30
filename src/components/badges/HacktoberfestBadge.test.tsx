/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { HacktoberfestBadge } from "./HacktoberfestBadge";

describe("HacktoberfestBadge", () => {
  it("shows a hacktoberfest badge with suggestion label", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(
      render(
        <HacktoberfestBadge
          pkg={pkg}
          year={2020}
          suggestionLabel="good first issue"
        />
      )
    ).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/hacktoberfest/2020/dbartholomae/jsx-readme?suggestion_label=good%20first%20issue"
          link="https://github.com/dbartholomae/jsx-readme"
        >
          hacktoberfest badge
        </Badge>
      )
    );
  });

  it("shows a hacktoberfest badge without suggestion label", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(render(<HacktoberfestBadge pkg={pkg} year={2020} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/hacktoberfest/2020/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme"
        >
          hacktoberfest badge
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<HacktoberfestBadge pkg={pkg} year={2020} />)).toBe("");
  });
});
