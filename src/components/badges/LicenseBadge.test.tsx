/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { LicenseBadge } from "./LicenseBadge";

describe("LicenseBadge", () => {
  it("shows a license badge if repository is in npm shortform", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<LicenseBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://img.shields.io/github/license/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme/blob/main/LICENSE"
        >
          license
        </Badge>
      )
    );
  });

  it("shows a license badge with a non-default branch", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const branch = "master";

    expect(await render(<LicenseBadge pkg={pkg} branch={branch} />)).toContain(
      await render(
        <Badge
          imageSource="https://img.shields.io/github/license/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme/blob/master/LICENSE"
        >
          license
        </Badge>
      )
    );
  });

  it("shows a license badge with a non-default license filename", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const licenseFileName = "LICENSE.txt";

    expect(
      await render(<LicenseBadge pkg={pkg} licenseFileName={licenseFileName} />)
    ).toContain(
      await render(
        <Badge
          imageSource="https://img.shields.io/github/license/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme/blob/main/LICENSE.txt"
        >
          license
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<LicenseBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(await render(<LicenseBadge pkg={pkg} />)).toBe("");
  });
});
