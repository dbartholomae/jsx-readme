/* @jsx Md */
import Md, { Component, Fragment, Heading, LineBreak, Link } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

interface Props {
  pkg: PackageJSON;
}

export const HomepageFromPkg: Component<Props> = ({ pkg: { homepage } }) => {
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
