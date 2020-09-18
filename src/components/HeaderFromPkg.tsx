/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment, Heading, LineBreak, Text } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { BadgeOptions } from "./badges";

/** @internal */
interface Props {
  overrideBadges?: Readonly<Partial<BadgeOptions>>;
  pkg: Readonly<PackageJSON>;
}

/**
 * @example
 *   ```js
 *   render(<Image src="./image.png" title="Title">
 *     Alternative text
 *   </Image>)
 *   ===
 *   '![Alternative text](./image.png "Title")'
 */
export const HeaderFromPkg: Component<Readonly<Props>> = ({
  pkg,
  overrideBadges = {},
}) => {
  return (
    <Fragment>
      <Heading level={1}>{pkg.name}</Heading>
      <BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />
      <LineBreak />
      <Text>{pkg.description}</Text>
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
