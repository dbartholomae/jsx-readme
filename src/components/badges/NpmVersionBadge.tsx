/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import type { PackageJSON } from "../../PackageJSON";
import { Badge } from "../Badge";

export interface Props {
  pkg: Readonly<PackageJSON>;
}

export const NpmVersionBadge: Component<Readonly<Props>> = ({ pkg }) => {
  if (pkg.private !== undefined && pkg.private) {
    return null;
  }
  return (
    <Badge
      link={`https://npmjs.org/package/${pkg.name}`}
      imageSource={`https://badge.fury.io/js/${pkg.name}.svg`}
    >
      npm package
    </Badge>
  );
};
