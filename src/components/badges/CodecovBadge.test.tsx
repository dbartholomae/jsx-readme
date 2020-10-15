/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { CodecovBadge } from "./CodecovBadge";

describe("CodecovBadge", () => {
  it("shows a codecov badge", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<CodecovBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://codecov.io/gh/dbartholomae/jsx-readme/branch/main/graph/badge.svg"
          link="https://codecov.io/gh/dbartholomae/jsx-readme"
        >
          codecov
        </Badge>
      )
    );
  });

  it("links correctly to a non-standard branch", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<CodecovBadge pkg={pkg} branch="master" />)).toContain(
      await render(
        <Badge
          imageSource="https://codecov.io/gh/dbartholomae/jsx-readme/branch/master/graph/badge.svg"
          link="https://codecov.io/gh/dbartholomae/jsx-readme"
        >
          codecov
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<CodecovBadge pkg={pkg} />)).toBe("");
  });
});
