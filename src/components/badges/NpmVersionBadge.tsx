/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import type { BadgeComponent } from "./utils/BadgeComponent";

/** Display a badge with the most recent version of this package on npm. */
export const NpmVersionBadge: BadgeComponent = ({ pkg }) => {
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
