/* @jsx MD */
import MD, {
  Component,
  Fragment,
  Heading,
  Image,
  LineBreak,
  Link,
} from "jsx-md";
import { PackageJSON } from "../PackageJSON";

/** @internal */
interface Props {
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
export const HeaderFromPkg: Component<Props> = ({ pkg: { name } }) => {
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
  return (
    <Fragment>
      <Heading level={1}>{name}</Heading>
      <JsxReadmeBadge />
    </Fragment>
  );
};
