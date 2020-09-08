/* @jsx MD */
import MD, { Component, PropsWithChildren } from "..";

/**
 * Renders a group of tags to markdown.
 * @example
 *   ```js
 *   render(<Fragment>Test1{'/n'}Test2</Fragment>)
 *   ===
 *   `Test1
 *   Test2`
 *   ```
 */
export const Fragment: Component<PropsWithChildren> = ({ children }) => (
  <mdFragment>{children}</mdFragment>
);
