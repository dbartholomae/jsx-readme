/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import { Badge } from "../Badge";
import type { PackageJSON } from "../../PackageJSON";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";

interface Options {
  branch?: string;
  workflowName: string;
}

export interface Props {
  options: Readonly<Options>;
  pkg: Readonly<PackageJSON>;
}

export const GithubWorkflowBadge: Component<Readonly<Props>> = ({
  pkg,
  options: { branch = "main", workflowName },
}) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  const escapedWorkflowName = encodeURIComponent(workflowName);
  return (
    <Badge
      link={`https://github.com/${owner}/${repo}/actions?query=workflow%3A"${escapedWorkflowName}"`}
      imageSource={`https://github.com/${owner}/${repo}/workflows/${escapedWorkflowName}/badge.svg?branch=${branch}`}
    >
      build status
    </Badge>
  );
};
