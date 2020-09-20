/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import {
  DependenciesBadge,
  DevDependenciesBadge,
  GithubIssuesBadge,
  JsxReadmeBadge,
  NpmDownloadsBadge,
  NpmVersionBadge,
  SemanticReleaseBadge,
} from "./badges";

/** @internal */
interface Props {
  disabledBadges?: ReadonlyArray<BadgeName>;
  pkg: Readonly<PackageJSON>;
}

export const badgeComponents = {
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
  dependenciesBadge: DependenciesBadge,
  devDependenciesBadge: DevDependenciesBadge,
  githubIssues: GithubIssuesBadge,
  jsxReadme: JsxReadmeBadge,
  semanticRelease: SemanticReleaseBadge,
} as const;

type BadgeName = keyof typeof badgeComponents;

export const defaultBadges: ReadonlyArray<BadgeName> = [
  "npmVersion",
  "npmDownloads",
  "dependenciesBadge",
  "devDependenciesBadge",
  "githubIssues",
  "semanticRelease",
  "jsxReadme",
] as const;

export const BadgesFromPkg: Component<Readonly<Props>> = ({
  pkg,
  disabledBadges = [],
}) => {
  const badgesToRender = defaultBadges.filter(
    (badge) => !disabledBadges?.includes(badge)
  );
  return (
    <Fragment>
      {badgesToRender.map((badgeName) => {
        const Badge = badgeComponents[badgeName];
        return <Badge key={badgeName} pkg={pkg} />;
      })}
    </Fragment>
  );
};
