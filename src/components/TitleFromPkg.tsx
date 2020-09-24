/* @jsx MD */
import MD, { Component, Heading } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

/** @internal */
interface Props {
  pkg: Readonly<PackageJSON>;
}

/** Display a heading with the package name */
export const TitleFromPkg: Component<Props> = ({ pkg: { name } }) => (
  <Heading level={1}>{name}</Heading>
);
