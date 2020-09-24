/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment, Image, LineBreak, Link } from "jsx-md";

/** @internal */
interface Props {
  link: string;
  imageSource: string;
  children: string;
}

/**
 * Creates a readme badge (linked image).
 * @example
 *   ```js
 *   render(
 *     <Badge
 *       link='https://npmjs.org/package/package-name'
 *       imageSource='https://badge.fury.io/js/package-name.svg'
 *     >
 *       npm package
 *     </Badge>
 *   )
 *   ===
 *   '[![npm package](https://badge.fury.io/js/package-name.svg)](https://npmjs.org/package/package-name)\n'
 *   ```
 */
export const Badge: Component<Readonly<Props>> = ({
  /** The alternative text for the image */
  children,
  imageSource,
  link,
}) => {
  return (
    <Fragment>
      <Link to={link}>
        <Image src={imageSource}>{children}</Image>
      </Link>
      <LineBreak />
    </Fragment>
  );
};
