/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../../PackageJSON";

/** @internal */
interface Props {
  suggestionLabel?: string;
  year: number;
  pkg: Readonly<PackageJSON>;
}

/** Display a badge showing which open-source projects are participating in Hacktoberfest via https://shields.io/ */
export const HacktoberfestBadge: Component<Props> = ({
  pkg,
  year,
  suggestionLabel = "",
}) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;

  const escapedSuggestionLabel = encodeURIComponent(suggestionLabel);

  const imageSource = `https://img.shields.io/github/hacktoberfest/${year}/${owner}/${repo}${
    escapedSuggestionLabel ? `?suggestion_label=${escapedSuggestionLabel}` : ""
  }`;

  return (
    <Badge
      link={`https://github.com/${owner}/${repo}`}
      imageSource={imageSource}
    >
      hacktoberfest badge
    </Badge>
  );
};
