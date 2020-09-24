/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../../PackageJSON";

/** @internal */
interface Props {
  pkg: Readonly<PackageJSON>;
  branch?: string;
}

/** Display a badge showing code coverage via https://codecov.io/ */
export const CodecovBadge: Component<Props> = ({ pkg, branch = "main" }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`https://codecov.io/gh/${owner}/${repo}`}
      imageSource={`https://codecov.io/gh/${owner}/${repo}/branch/${branch}/graph/badge.svg`}
    >
      codecov
    </Badge>
  );
};
