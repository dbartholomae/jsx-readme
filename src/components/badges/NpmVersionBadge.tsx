/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import { Badge } from "../Badge";
import { BadgeProps } from "./utils/BadgeProps";

export const NpmVersionBadge: Component<Readonly<BadgeProps>> = ({ pkg }) => {
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
