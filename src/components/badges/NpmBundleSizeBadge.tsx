/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import type { BadgeComponent } from "./utils/BadgeComponent";

/** Display a badge with the most recent version of this package on npm. */
export const NpmBundleSizeBadge: BadgeComponent = ({ pkg }) => {
  if (pkg.private !== undefined && pkg.private) {
    return null;
  }
  return (
    <Badge
      link={`https://bundlephobia.com/result?p=${pkg.name}`}
      imageSource={`https://img.shields.io/bundlephobia/minzip/${pkg.name}.svg`}
    >
      bundle size
    </Badge>
  );
};
