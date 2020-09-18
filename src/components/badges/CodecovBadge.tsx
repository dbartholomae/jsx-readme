/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { BadgeComponent } from "./utils/BadgeComponent";

export const CodecovBadge: BadgeComponent = ({ pkg }) => {
  const branch = "main";
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
