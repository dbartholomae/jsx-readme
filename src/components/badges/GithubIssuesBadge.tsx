/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import { Badge } from "../Badge";
import type { PackageJSON, Repository } from "../../PackageJSON";

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

interface OwnerAndRepo {
  owner: string;
  repo: string;
}

function extractGithubOwnerAndRepo(
  repository?: Repository | string
): OwnerAndRepo | undefined {
  if (repository === undefined) {
    return undefined;
  }
  const url = getUrlFromRepository(repository);
  return getGithubOwnerAndRepoFromUrl(url);
}

function getUrlFromRepository(repository: Repository | string): string {
  return typeof repository === "string" ? repository : repository.url;
}

function getGithubOwnerAndRepoFromUrl(url: string): OwnerAndRepo | undefined {
  const regexResult =
    /^github:(?<owner>[-\w]+)\/(?<repo>[-\w]+)$/.exec(url) ??
    /^git@github\.com:(?<owner>[-\w]+)\/(?<repo>[-\w]+)\.git$/.exec(url) ??
    /^https:\/\/(?:www\.)?github\.com\/(?<owner>[-\w]+)\/(?<repo>[-\w]+)\.git$/.exec(
      url
    );
  return regexResult?.groups as OwnerAndRepo | undefined;
}
