/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { extractGithubOwnerAndRepo } from "./utils/extractGithubOwnerAndRepo";
import { PackageJSON } from "../../PackageJSON";

/** @internal */
interface Props {
  pkg: Readonly<PackageJSON>;
}

/** Display a badge with the status of a CLA Assistant*/
export const CLAAssistantBadge: Component<Props> = ({ pkg }) => {
  const ownerAndRepo = extractGithubOwnerAndRepo(pkg.repository);
  if (ownerAndRepo === undefined) {
    return null;
  }
  const { owner, repo } = ownerAndRepo;
  return (
    <Badge
      imageSource={`https://cla-assistant.io/readme/badge/${owner}/${repo}`}
      link={`https://cla-assistant.io/${owner}/${repo}`}
    >
      CLA Assistant
    </Badge>
  );
};
