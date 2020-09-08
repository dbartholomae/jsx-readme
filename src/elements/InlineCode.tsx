/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/**
 * @example
 *   ```js
 *   render(<InlineCode>Test</InlineCode>)
 *   ===
 *   '`Test`'
 *   ```
 */
export const InlineCode: Component<PropsWithChildren> = ({ children }) => (
  <Fragment>
    {"`"}
    {children}
    {"`"}
  </Fragment>
);
