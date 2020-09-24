/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { BadgeComponent } from "./utils/BadgeComponent";

/** Display a badge explaining that this repo uses https://github.com/semantic-release/semantic-release */
export const SemanticReleaseBadge: BadgeComponent = ({ pkg }) => {
  if (pkg.devDependencies?.["semantic-release"] === undefined) {
    return null;
  }
  return (
    <Badge
      link="https://github.com/semantic-release/semantic-release#badge"
      imageSource="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"
    >
      semantic release
    </Badge>
  );
};
