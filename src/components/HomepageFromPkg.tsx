/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { Fragment, Heading, LineBreak, Link } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";

/** @internal */
interface Props {
  pkg: Readonly<PackageJSON>;
  title?: string;
}

/** Display a section linking to the homepage defined in package.json */
export const HomepageFromPkg: Component<Readonly<Props>> = ({
  pkg: { homepage },
  title = "🏠 Homepage",
}) => {
  if (homepage === undefined) {
    return null;
  }

  return (
    <Fragment>
      <Heading level={2}>{title}</Heading>
      You can find more about this on <Link to={homepage}>{homepage}</Link>.
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
