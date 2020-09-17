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
  return (
    <Fragment>
      <Heading level={1}>{pkg.name}</Heading>
      {badgesToRender["npm-version"] && <NpmVersionBadge />}
      {badgesToRender["jsx-readme"] && <JsxReadmeBadge />}
      <LineBreak />
      <Text>{pkg.description}</Text>
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
