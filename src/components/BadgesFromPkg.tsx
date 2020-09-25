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
  NpmBundleSizeBadge,
  NpmVersionBadge,
  SemanticReleaseBadge,
} from "./badges";

/** @internal */
interface Props {
  disabledBadges?: ReadonlyArray<BadgeName>;
  pkg: Readonly<PackageJSON>;
}

/** @internal */
export const badgeComponents = {
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
  npmBundleSize: NpmBundleSizeBadge,
  dependenciesBadge: DependenciesBadge,
  devDependenciesBadge: DevDependenciesBadge,
  githubIssues: GithubIssuesBadge,
  jsxReadme: JsxReadmeBadge,
  semanticRelease: SemanticReleaseBadge,
} as const;

type BadgeName = keyof typeof badgeComponents;

/** @internal */
/* This array's order determines the order in which components are displayed */
export const defaultBadges: ReadonlyArray<BadgeName> = [
  "npmVersion",
  "npmDownloads",
  "npmBundleSize",
  "githubIssues",
  "dependenciesBadge",
  "devDependenciesBadge",
  "semanticRelease",
  "jsxReadme",
] as const;

/** Renders a list of badges that can be inferred from `package.json`. */
export const BadgesFromPkg: Component<Readonly<Props>> = ({
  pkg,
  /**
   * A list of badge names to not include,
   * even if they could be inferred from package.json
   */
  disabledBadges = [],
}) => {
  const badgesToRender = defaultBadges.filter(
    (badge) => !disabledBadges.includes(badge)
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
