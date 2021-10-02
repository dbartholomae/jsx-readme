/* @jsx MD */
import MD, { awaitComponent, Component } from "jsx-md";
import parseLinkHeader from "parse-link-header";

import { Octokit } from "@octokit/core";

import { ContributorsSection } from "../components";
import { extractGithubOwnerAndRepo } from "../components/badges/utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../PackageJSON";

import type { Contributor } from "../components/ContributorsList";

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
  if (!resp.headers.link) {
    return 0;
  }
  const links = parseLinkHeader(resp.headers.link);
  if (!links) {
    return 0;
  }
  return parseInt(links.last?.page);
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
        // NOTE: Exclude "Bot" and repo owner as contributors does'nt work as total contributors count will include them as well.
        // .filter(
        //   (contributor) =>
        //     contributor.type !== "Bot" && contributor.login !== owner
        // )
        .reduce<Array<Contributor>>(
          (result, { id, login }) =>
            id && login ? result.concat({ id, name: login }) : result,
          []
        )
    );
  }
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
    githubAccessToken,
    contributorsMaxDisplayLength = 12,
  }) => {
    const repoData = extractGithubOwnerAndRepo(pkg.repository);
    if (repoData === undefined) {
      return null;
    }

    const { repo, owner } = repoData;

    const auth = githubAccessToken || process.env.GITHUB_TOKEN;

    const octokit = new Octokit({ auth });

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
