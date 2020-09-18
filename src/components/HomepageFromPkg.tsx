/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { Fragment, Heading, LineBreak, Link } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";

interface Props {
  pkg: Readonly<PackageJSON>;
}

export const HomepageFromPkg: Component<Readonly<Props>> = ({
  pkg: { homepage },
}) => {
  if (homepage === undefined) {
    return null;
  }

  return (
    <Fragment>
      <Heading level={2}>Homepage</Heading>
      You can find more about this on <Link to={homepage}>{homepage}</Link>.
      <LineBreak />
    </Fragment>
  );
};
