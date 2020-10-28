/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { Fragment, Heading, LineBreak, Link } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";

/** @internal */
interface Props {
  licenseFilePath?: string;
  pkg: Readonly<PackageJSON>;
  title?: string;
}
const defaultTitle = "📜 License";

/** Display a section indicating the license defined in package.json */
export const LicenseFromPkg: Component<Readonly<Props>> = ({
  pkg: { license },
  licenseFilePath = "./LICENSE",
  title,
}) => {
  if (license === undefined) {
    return null;
  }

  return (
    <Fragment>
      <Heading level={2}>{title || defaultTitle}</Heading>
      {license}. See <Link to={licenseFilePath}>LICENSE file</Link> for details.
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
