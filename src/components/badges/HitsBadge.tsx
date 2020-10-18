/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import type { BadgeComponent } from "./utils/BadgeComponent";

/** Show a badge with the count of Hits(Page View Counter) on a particular Repo on GitHub */
export const HitsBadge: BadgeComponent = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }

  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`http://hits.dwyl.com/${owner}/${repo}`}
      imageSource={`http://hits.dwyl.com/${owner}/${repo}.svg`}
    >
      hits
    </Badge>
  );
};
