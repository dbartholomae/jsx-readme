/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";

export const GithubIssuesBadge = () => {
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
