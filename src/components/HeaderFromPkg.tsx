/* @jsx MD */
import MD, { Component, Fragment, Heading, LineBreak, Text } from "jsx-md";
import { PackageJSON } from "../PackageJSON";
import { BadgesFromPkg, OverrideBadges } from "./BadgesFromPkg";

/** @internal */
interface Props {
  overrideBadges?: OverrideBadges;
  pkg: PackageJSON;
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
export const HeaderFromPkg: Component<Props> = ({
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
