/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import { Badge } from "../Badge";
import type { PackageJSON } from "../../PackageJSON";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";

export interface Props {
  pkg: Readonly<PackageJSON>;
}
export const GithubIssuesBadge: Component<Readonly<Props>> = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`https://github.com/${owner}/${repo}/issues`}
      imageSource={`https://img.shields.io/github/issues-raw/${owner}/${repo}.svg`}
    >
      open issues
    </Badge>
  );
};
