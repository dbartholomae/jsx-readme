import { Repository } from "../../../PackageJSON";

interface OwnerAndRepo {
  owner: string;
  repo: string;
}

export function extractGithubOwnerAndRepo(
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
