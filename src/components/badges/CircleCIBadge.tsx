/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../../PackageJSON";

/** @internal */
interface Props {
  branch?: string;
  style?: "svg" | "shield";
  pkg: Readonly<PackageJSON>;
}

/** Display a badge with the status of CircleCI Build */
export const CircleCIBadge: Component<Props> = ({
  branch,
  style = "svg",
  pkg,
}) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;

  if (branch === undefined) {
    return (
      <Badge
        link={`https://circleci.com/gh/${owner}/${repo}`}
        imageSource={`https://circleci.com/gh/${owner}/${repo}.svg?style=${style}`}
      >
        CircleCI
      </Badge>
    );
  }
  return (
    <Badge
      link={`https://circleci.com/gh/${owner}/${repo}/tree/${branch}`}
      imageSource={`https://circleci.com/gh/${owner}/${repo}/tree/${branch}.svg?style=${style}`}
    >
      CircleCI
    </Badge>
  );
};
