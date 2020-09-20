/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import type { BadgeComponent } from "./utils/BadgeComponent";

export const DevDependenciesBadge: BadgeComponent = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`https://david-dm.org/${owner}/${repo}?type=dev`}
      imageSource={`https://david-dm.org/${owner}/${repo}/dev-status.svg`}
    >
      devDependency status
    </Badge>
  );
};
