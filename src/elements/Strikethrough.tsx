/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/**
 * @example
 *   ```js
 *   render(<Strikethrough>Test</Strikethrough>)
 *   ===
 *   '~~Test~~'
 *   ```
 */
export const Strikethrough: Component<PropsWithChildren> = ({ children }) => (
  <Fragment>
    {"~~"}
    {children}
    {"~~"}
  </Fragment>
);
