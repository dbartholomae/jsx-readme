/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../../PackageJSON";

/** @internal */
interface Props {
  branch?: string;
  licenseFileName?: string;
  pkg: Readonly<PackageJSON>;
}

/** Display a badge with the license used for a GitHub repository */
export const LicenseBadge: Component<Props> = ({
  pkg,
  branch = "main",
  licenseFileName = "LICENSE",
}) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`https://github.com/${owner}/${repo}/blob/${branch}/${licenseFileName}`}
      imageSource={`https://img.shields.io/github/license/${owner}/${repo}`}
    >
      license
    </Badge>
  );
};
