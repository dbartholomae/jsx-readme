/* @jsx MD */
import MD from "jsx-md";
import { PackageJSON } from "../../PackageJSON";
import { Badge } from "../Badge";

export const NpmVersionBadge = ({ pkg }: { pkg: PackageJSON }) => (
  <Badge
    link={`https://npmjs.org/package/${pkg.name}`}
    imageSource={`https://badge.fury.io/js/${pkg.name}.svg`}
  >
    npm package
  </Badge>
);
