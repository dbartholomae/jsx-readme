/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { PackageJSON } from "../../PackageJSON";

interface Props {
  pkg: Readonly<PackageJSON>;
}

export const SemanticReleaseBadge: Component<Props> = () => (
  <Badge
    link="https://github.com/semantic-release/semantic-release#badge"
    imageSource="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"
  >
    semantic release
  </Badge>
);
