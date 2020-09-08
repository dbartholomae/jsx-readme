/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  to: string;
  title?: string;
}

/**
 * @example
 *   ```js
 *   render(<Link to="https://example.com" title="Title">
 *     Test
 *   </Link>)
 *   ===
 *   '[Test](https://example.com "Title")'
 */
export const Link: Component<PropsWithChildren<Props>> = ({
  children,
  to,
  title,
}) => (
  <Fragment>
    {"["}
    {children}
    {"]"}
    {"("}
    {to}
    {title ? ` "${title}"` : null}
    {")"}
  </Fragment>
);
