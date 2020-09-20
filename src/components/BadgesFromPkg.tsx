/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import { badgeComponents, BadgeName } from "./badges";

/** @internal */
interface Props {
  disabledBadges?: ReadonlyArray<BadgeName>;
  pkg: Readonly<PackageJSON>;
}

export const defaultBadges: ReadonlyArray<BadgeName> = [
  "npmVersion",
  "npmDownloads",
  "githubIssues",
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
