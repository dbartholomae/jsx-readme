/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import type { BadgeComponent } from "./utils/BadgeComponent";

/** Display a badge with the top language used for a GitHub repository */
export const GithubTopLanguageBadge: BadgeComponent = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      link={`https://github.com/${owner}/${repo}`}
      imageSource={`https://img.shields.io/github/languages/top/${owner}/${repo}`}
    >
      GitHub Top language
    </Badge>
  );
};
