/* @jsx MD */
import MD, { Fragment } from "jsx-md";
import { PackageJSON } from "../PackageJSON";
import { JsxReadmeBadge } from "./badges/JsxReadmeBadge";
import { NpmVersionBadge } from "./badges/NpmVersionBadge";
import { GithubIssuesBadge } from "./badges/GithubIssuesBadge";

export type OverrideBadges = {
  [badgeName: string]: boolean | string;
};

/** @internal */
interface Props {
  overrideBadges?: OverrideBadges;
  pkg: PackageJSON;
}

export function BadgesFromPkg({ pkg, overrideBadges }: Props) {
  const badgesToRender = {
    "github-issues": true,
    "jsx-readme": true,
    "npm-version": !pkg.private,
    ...overrideBadges,
  };
  return (
    <Fragment>
      {badgesToRender["npm-version"] && <NpmVersionBadge pkg={pkg} />}
      {badgesToRender["github-issues"] && <GithubIssuesBadge pkg={pkg} />}
      {badgesToRender["jsx-readme"] && <JsxReadmeBadge />}
    </Fragment>
  );
}
