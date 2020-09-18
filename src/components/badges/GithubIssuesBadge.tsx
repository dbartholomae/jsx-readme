/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import type { PackageJSON, Repository } from "../../PackageJSON";

export interface Props {
  pkg: PackageJSON;
}

function extractGithubOwnerAndRepo(
  repository?: Repository | string
): [string, string] | undefined {
  if (repository === undefined) {
    return undefined;
  }
  const url = typeof repository === "string" ? repository : repository.url;
  const ownerRegex = /^git@github\.com:([-\w]+)\/([-\w]+)\.git$/;
  const regexResult = ownerRegex.exec(url);
  if (regexResult === null) {
    return undefined;
  }
  const owner = regexResult[1];
  const repo = regexResult[2];
  return [owner, repo];
}

export const GithubIssuesBadge: Component<Props> = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const [owner, repoName] = ownerAndRepo;
  return (
    <Badge
      link={`https://github.com/${owner}/${repoName}/issues`}
      imageSource={`https://img.shields.io/github/issues-raw/${owner}/${repoName}.svg`}
    >
      open issues
    </Badge>
  );
};
