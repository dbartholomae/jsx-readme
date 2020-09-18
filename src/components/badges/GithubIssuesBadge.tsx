/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";
import { PackageJSON } from "../../PackageJSON";

export interface Props {
  pkg: PackageJSON;
}

export const GithubIssuesBadge: Component<Props> = () => {
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
