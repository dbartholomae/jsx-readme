/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import { badgeNames, BadgeOptions, badges, defaultBadges } from "./badges";

/** @internal */
interface Props {
  overrideBadges?: Readonly<Partial<BadgeOptions>>;
  pkg: Readonly<PackageJSON>;
}

export const BadgesFromPkg: Component<Readonly<Props>> = ({
  pkg,
  overrideBadges = {},
}) => {
  const badgesToRender = {
    ...defaultBadges,
    ...overrideBadges,
  };
  return (
    <Fragment>
      {badgeNames.map((name) => {
        const Badge = badges[name];
        if (!badgesToRender[name]) {
          return null;
        }
        const options = overrideBadges[name];

        // Types ensure that options are set correctly, but it is
        // hard for TypeScript to know this here
        /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */
        return <Badge key={name} pkg={pkg} options={options as any} />;
        /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */
      })}
    </Fragment>
  );
};
