/* @jsx MD */
import MD, { Fragment } from "jsx-md";
import { Badge } from "./Badge";
import { PackageJSON } from "../PackageJSON";

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
  const JsxReadmeBadge = () => (
    <Badge
      link="https://dbartholomae.github.io/jsx-readme"
      imageSource="https://img.shields.io/badge/jsx--readme-lightgrey"
    >
      jsx-readme
    </Badge>
  );
  const NpmVersionBadge = () => (
    <Badge
      link={`https://npmjs.org/package/${pkg.name}`}
      imageSource={`https://badge.fury.io/js/${pkg.name}.svg`}
    >
      npm package
    </Badge>
  );
  const owner = "dbartholomae";
  const repoName = "jsx-readme";
  const GithubIssuesBadge = () => (
    <Badge
      link={`https://github.com/${owner}/${repoName}/issues`}
      imageSource={`https://img.shields.io/github/issues-raw/${owner}/${repoName}.svg`}
    >
      open issues
    </Badge>
  );
  return (
    <Fragment>
      {badgesToRender["npm-version"] && <NpmVersionBadge />}
      {badgesToRender["github-issues"] && <GithubIssuesBadge />}
      {badgesToRender["jsx-readme"] && <JsxReadmeBadge />}
    </Fragment>
  );
}
