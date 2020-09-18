/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { BadgeComponent } from "./utils/BadgeComponent";

export interface Options {
  branch?: string;
  workflowName: string;
}

export const GithubWorkflowBadge: BadgeComponent<Options> = ({
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
