/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import { PackageJSON } from "../../PackageJSON";

export const GithubIssuesBadge = ({ pkg }: { pkg: PackageJSON }) => {
  const owner = "dbartholomae";
  const repoName = "jsx-readme";
  return (
    <Badge
      link={`https://github.com/${owner}/${repoName}/issues`}
      imageSource={`https://img.shields.io/github/issues-raw/${owner}/${repoName}.svg`}
    >
      open issues
    </Badge>
  );
};
