/* @jsx MD */
import MD, { Component, Fragment } from "..";

/**
 * @example
 *   ```js
 *   render(<HorizontalRule />)
 *   ===
 *   '\n---\n'
 */
export const HorizontalRule: Component = () => (
  <Fragment>
    {"\n"}---{"\n"}
  </Fragment>
);
