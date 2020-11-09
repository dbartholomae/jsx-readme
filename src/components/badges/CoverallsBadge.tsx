/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../../PackageJSON";

/** @internal */
interface Props {
  branch?: string;
  pkg: Readonly<PackageJSON>;
}

/** Display a badge with the status of Coveralls Build, https://coveralls.io/ */
export const CoverallsBadge: Component<Props> = ({ branch, pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;

  if (branch === undefined) {
    return (
      <Badge
        link={`https://coveralls.io/github/${owner}/${repo}`}
        imageSource={`https://coveralls.io/repos/github/${owner}/${repo}/badge.svg`}
      >
        coveralls
      </Badge>
    );
  }
  return (
    <Badge
      link={`https://coveralls.io/github/${owner}/${repo}?branch=${branch}`}
      imageSource={`https://coveralls.io/repos/github/${owner}/${repo}/badge.svg?branch=${branch}`}
    >
      coveralls
    </Badge>
  );
};
