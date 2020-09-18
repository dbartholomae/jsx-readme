/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import { badges } from "./badges";

export interface OverrideBadges {
  [badgeName: string]: boolean | string;
}

/** @internal */
interface Props {
  overrideBadges?: Readonly<OverrideBadges>;
  pkg: Readonly<PackageJSON>;
}

export const BadgesFromPkg: Component<Readonly<Props>> = ({
  pkg,
  overrideBadges,
}) => {
  const badgeNames = Object.keys(badges) as (keyof typeof badges)[];
  const badgesToRender = {
    "github-issues": true,
    "jsx-readme": true,
    "npm-version": true,
    ...overrideBadges,
  };
  return (
    <Fragment>
      {badgeNames.map((name) => {
        const Badge = badges[name];
        if (!badgesToRender[name]) {
          return null;
        }
        return <Badge key={name} pkg={pkg} />;
      })}
    </Fragment>
  );
};
