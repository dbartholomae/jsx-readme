/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { BadgeProps } from "./utils/BadgeProps";

export const GithubIssuesBadge: Component<Readonly<BadgeProps>> = ({ pkg }) => {
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
