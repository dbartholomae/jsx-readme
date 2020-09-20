/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment, LineBreak } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import { BadgesFromPkg } from "./BadgesFromPkg";
import { BadgeOptions } from "./badges";
import { TitleFromPkg } from "./TitleFromPkg";
import { DescriptionFromPkg } from "./DescriptionFromPkg";

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
      <TitleFromPkg pkg={pkg} />
      <BadgesFromPkg pkg={pkg} overrideBadges={overrideBadges} />
      <LineBreak />
      <DescriptionFromPkg pkg={pkg} />
    </Fragment>
  );
};
