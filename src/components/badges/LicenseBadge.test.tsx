/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { LicenseBadge } from "./LicenseBadge";

describe("LicenseBadge", () => {
  it("shows a license badge if repository is in npm shortform", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(render(<LicenseBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/license/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme/blob/main/LICENSE"
        >
          license
        </Badge>
      )
    );
  });

  it("shows a license badge with a non-default branch", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const branch = "master";

    expect(render(<LicenseBadge pkg={pkg} branch={branch} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/license/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme/blob/master/LICENSE"
        >
          license
        </Badge>
      )
    );
  });

  it("shows a license badge with a non-default license filename", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const licenseFileName = "LICENSE.txt";

    expect(
      render(<LicenseBadge pkg={pkg} licenseFileName={licenseFileName} />)
    ).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/github/license/dbartholomae/jsx-readme"
          link="https://github.com/dbartholomae/jsx-readme/blob/main/LICENSE.txt"
        >
          license
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<LicenseBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(render(<LicenseBadge pkg={pkg} />)).toBe("");
  });
});
