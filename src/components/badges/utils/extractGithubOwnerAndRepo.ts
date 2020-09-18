import { Repository } from "../../../PackageJSON";
import { extractFirstMatch } from "./extractFirstMatch";

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

  const SHORTFORM_REGEX = /^github:(?<owner>[-\w]+)\/(?<repo>[-\w]+)$/;
  const SSH_REGEX = /^git@github\.com:(?<owner>[-\w]+)\/(?<repo>[-\w]+)\.git$/;
  const HTTPS_REGEX = /^https:\/\/(?:www\.)?github\.com\/(?<owner>[-\w]+)\/(?<repo>[-\w]+)\.git$/;

  return extractFirstMatch(url, [SHORTFORM_REGEX, SSH_REGEX, HTTPS_REGEX]) as
    | OwnerAndRepo
    | undefined;
}

function getUrlFromRepository(repository: Repository | string): string {
  return typeof repository === "string" ? repository : repository.url;
}
