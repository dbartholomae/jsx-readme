/* @jsx MD */
import MD, { Component } from "jsx-md";
import { PackageJSON } from "../../PackageJSON";
import { Badge } from "../Badge";

export interface Props {
  pkg: PackageJSON;
}

export const NpmVersionBadge: Component<Props> = ({ pkg }: Props) => {
  if (pkg.private) {
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
