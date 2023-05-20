/* @jsx MD */
import MD, { awaitComponent, Component } from "jsx-md";
import parseLinkHeader from "parse-link-header";

import { Octokit } from "@octokit/core";

import { ContributorsSection } from "../components";
import { extractGithubOwnerAndRepo } from "../components/badges/utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../PackageJSON";

import type { Contributor } from "../components/ContributorsTable";

// Fetch total contributors count using pagination trick. See https://stackoverflow.com/a/44347632.
const fetchTotalContributorsCount = async (
  client: Octokit,
  owner: string,
  repo: string
) => {
  const resp = await client.request(
    "GET /repos/{owner}/{repo}/contributors{?per_page}",
    { owner, repo, per_page: 1 }
  );
  /* istanbul ignore next: hard to test as it relies on GitHub API */
  if (!resp.headers.link) {
    return 0;
  }
  const links = parseLinkHeader(resp.headers.link);
  /* istanbul ignore next: hard to test as it relies on GitHub API */
  if (!links) {
    return 0;
  }
  /* istanbul ignore next: hard to test as it relies on GitHub API */
  return parseInt(links.last?.page ?? "0");
};

// List repository contributors using v3 GitHub API, See https://docs.github.com/en/rest/reference/repos#list-repository-contributors.
const fetchContributors = async (
  client: Octokit,
  owner: string,
  repo: string,
  fetchUntil: number
) => {
  let contributors: Array<Contributor> = [];
  for (let page = 1; contributors.length < fetchUntil; page++) {
    const resp = await client.request(
      "GET /repos/{owner}/{repo}/contributors",
      { owner, repo, page }
    );
    // No more contributors.
    if (resp.data.length <= 0) {
      return contributors;
    }
    contributors = contributors.concat(
      resp.data
        .filter((contributor) => contributor.type !== "Bot")
        .reduce<Array<Contributor>>(
          (result, { id, login }) =>
            /* istanbul ignore next: hard to test as it relies on GitHub API */
            id && login ? result.concat({ id, name: login }) : result,
          []
        )
    );
  }
  /* istanbul ignore next */
  return contributors.slice(0, fetchUntil);
};

/** @internal */
interface Props {
  title?: string;
  pkg: PackageJSON;
  githubAccessToken?: string;
  contributorsMaxDisplayLength?: number;
}
/** Displays a contributors section from a package.json file. */
export const ContributorsSectionFromPkg: Component<Props> = awaitComponent(
  async ({
    title = "‍💼 Contributors",
    pkg,
    githubAccessToken = process.env.GITHUB_TOKEN,
    contributorsMaxDisplayLength = 12,
  }) => {
    const repoData = extractGithubOwnerAndRepo(pkg.repository);
    if (repoData === undefined) {
      return null;
    }

    const { repo, owner } = repoData;

    const octokit = new Octokit({ auth: githubAccessToken });

    const totalCountributors = await fetchTotalContributorsCount(
      octokit,
      owner,
      repo
    );

    const contributors = await fetchContributors(
      octokit,
      owner,
      repo,
      contributorsMaxDisplayLength
    );

    return (
      <ContributorsSection
        title={title}
        repo={repo}
        owner={owner}
        contributors={contributors}
        additionalContributorsCount={totalCountributors - contributors.length}
      />
    );
  }
);
