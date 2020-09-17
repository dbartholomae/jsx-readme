/* @jsx MD */
import MD, { Component, Fragment } from "jsx-md";
import { PackageJSON } from "../PackageJSON";
import { badges } from "./badges";

export type OverrideBadges = {
  [badgeName: string]: boolean | string;
};

/** @internal */
interface Props {
  overrideBadges?: OverrideBadges;
  pkg: PackageJSON;
}

export const BadgesFromPkg: Component<Props> = ({
  pkg,
  overrideBadges,
}: Props) => {
  const badgeNames = Object.keys(badges) as Array<keyof typeof badges>;
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
