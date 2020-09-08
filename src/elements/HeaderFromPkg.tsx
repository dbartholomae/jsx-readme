/* @jsx MD */
import MD, { Component, Fragment, Heading } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

/** @internal */
interface Props {
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
export const HeaderFromPkg: Component<Props> = ({ pkg: { name } }) => (
  <Fragment>
    <Heading level={1}>{name}</Heading>
  </Fragment>
);
