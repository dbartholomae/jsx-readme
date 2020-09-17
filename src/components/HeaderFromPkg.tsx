/* @jsx MD */
import MD, { Component, Fragment, Heading, LineBreak, Text } from "jsx-md";
import { PackageJSON } from "../PackageJSON";
import { Badge } from "./Badge";

/** @internal */
interface Props {
  overrideBadges?: {
    [badgeName: string]: boolean | string;
  };
  pkg: PackageJSON;
}

/**
 * @example
 *   ```js
 *   render(<Image src="./image.png" title="Title">
 *     Alternative text
 *   </Image>)
 *   ===
 *   '![Alternative text](./image.png "Title")'
 */
export const HeaderFromPkg: Component<Props> = ({
  pkg,
  overrideBadges = {},
}) => {
  const badgesToRender = {
    "github-issues": true,
    "jsx-readme": true,
    "npm-version": !pkg.private,
    ...overrideBadges,
  };
  const JsxReadmeBadge = () => (
    <Badge
      link="https://dbartholomae.github.io/jsx-readme"
      imageSource="https://img.shields.io/badge/jsx--readme-lightgrey"
    >
      jsx-readme
    </Badge>
  );
  const NpmVersionBadge = () => (
    <Badge
      link={`https://npmjs.org/package/${pkg.name}`}
      imageSource={`https://badge.fury.io/js/${pkg.name}.svg`}
    >
      npm package
    </Badge>
  );
  const owner = "dbartholomae";
  const repoName = "jsx-readme";
  const GithubIssuesBadge = () => (
    <Badge
      link={`https://github.com/${owner}/${repoName}/issues`}
      imageSource={`https://img.shields.io/github/issues-raw/${owner}/${repoName}.svg`}
    >
      open issues
    </Badge>
  );
  return (
    <Fragment>
      <Heading level={1}>{pkg.name}</Heading>
      {badgesToRender["npm-version"] && <NpmVersionBadge />}
      {badgesToRender["github-issues"] && <GithubIssuesBadge />}
      {badgesToRender["jsx-readme"] && <JsxReadmeBadge />}
      <LineBreak />
      <Text>{pkg.description}</Text>
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
