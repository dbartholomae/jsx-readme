/* @jsx Md */
import Md, { Component, Heading } from "jsx-md";
import { PackageJSON } from "../PackageJSON";

interface Props {
  pkg: PackageJSON;
}

export const ExamplesFromPkg: Component<Props> = () => {
  return <Heading level={2}>Examples</Heading>;
};
