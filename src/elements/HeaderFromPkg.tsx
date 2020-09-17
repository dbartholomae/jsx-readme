/* @jsx MD */
import MD, {
  Component,
  Fragment,
  Heading,
  Image,
  LineBreak,
  Link,
  Text,
} from "jsx-md";
import { PackageJSON } from "../PackageJSON";

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
    <Fragment>
      <Link to="https://dbartholomae.github.io/jsx-readme">
        <Image src="https://img.shields.io/badge/jsx--readme-lightgrey">
          jsx-readme
        </Image>
      </Link>
      <LineBreak />
    </Fragment>
  );
  const NpmVersionBadge = () => (
    <Fragment>
      <Link to={`https://npmjs.org/package/${name}`}>
        <Image src={`https://badge.fury.io/js/${name}.svg`}>npm package</Image>
      </Link>
      <LineBreak />
    </Fragment>
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
