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
  pkg: { description, name },
  overrideBadges = {},
}) => {
  const badgesToRender = {
    "jsx-readme": true,
    ...overrideBadges,
  };
  const JsxReadmeBadge = () => (
    <Badge
      to="https://dbartholomae.github.io/jsx-readme"
      imageSource="https://img.shields.io/badge/jsx--readme-lightgrey"
    >
      jsx-readme
    </Badge>
  );
  const NpmVersionBadge = () => (
    <Badge
      to={`https://npmjs.org/package/${name}`}
      imageSource={`https://badge.fury.io/js/${name}.svg`}
    >
      npm package
    </Badge>
  );
  return (
    <Fragment>
      <Heading level={1}>{name}</Heading>
      <NpmVersionBadge />
      {badgesToRender["jsx-readme"] && <JsxReadmeBadge />}
      <LineBreak />
      <Text>{description}</Text>
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
