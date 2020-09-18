/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { Heading } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";

interface Props {
  pkg: PackageJSON;
}

export const ExamplesFromPkg: Component<Props> = () => {
  return <Heading level={2}>Examples</Heading>;
};
