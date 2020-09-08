/* @jsx MD */
import MD, { Component, Fragment } from "..";

/** @internal */
interface Props {
  children: string;
  src: string;
  title?: string;
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
export const Image: Component<Props> = ({ children, src, title }) => (
  <Fragment>
    {"!["}
    {children}
    {"]"}
    {"("}
    {src}
    {title ? ` "${title}"` : null}
    {")"}
  </Fragment>
);
