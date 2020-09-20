/* @jsx MD */
import MD, { Component, Heading } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

interface Props {
  pkg: Readonly<PackageJSON>;
}

export const TitleFromPkg: Component<Props> = ({ pkg: { name } }) => (
  <Heading level={1}>{name}</Heading>
);
