/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import type { BadgeComponent } from "./utils/BadgeComponent";

export const DependenciesBadge: BadgeComponent = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`https://david-dm.org/${owner}/${repo}`}
      imageSource={`https://david-dm.org/${owner}/${repo}.svg?theme=shields.io`}
    >
      dependency status
    </Badge>
  );
};
