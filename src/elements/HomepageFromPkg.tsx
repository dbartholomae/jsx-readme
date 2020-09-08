/* @jsx Md */
import Md, { Component, Heading } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

interface Props {
  pkg: PackageJSON;
}

export const HomepageFromPkg: Component<Props> = () => {
  return <Heading level={2}>Homepage</Heading>;
};
