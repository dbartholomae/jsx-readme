/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment, LineBreak, Text } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

/** @internal */
interface Props {
  pkg: Readonly<PackageJSON>;
}

/** Displays the descripion from a package.json file. */
export const DescriptionFromPkg: Component<Props> = ({
  pkg: { description },
}: Props) => {
  if (description === undefined) {
    return null;
  }
  return (
    <Fragment>
      <Text>{description}</Text>
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
