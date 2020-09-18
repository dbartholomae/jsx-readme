/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import { Badge } from "../Badge";
import { BadgeProps } from "./utils/BadgeProps";

export const NpmDownloadsBadge: Component<Readonly<BadgeProps>> = ({ pkg }) => {
  if (pkg.private !== undefined && pkg.private) {
    return null;
  }
  return (
    <Badge
      link={`https://npm-stat.com/charts.html?package=${pkg.name}`}
      imageSource={`https://img.shields.io/npm/dw/${pkg.name}.svg`}
    >
      downloads
    </Badge>
  );
};
