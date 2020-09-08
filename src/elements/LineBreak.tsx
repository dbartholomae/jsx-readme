/* @jsx MD */
import MD, { Component, Fragment } from "..";

/**
 * @example
 *   ```js
 *   render(<LineBreak />)
 *   ===
 *   '\n'
 */
export const LineBreak: Component = () => <Fragment>{"\n"}</Fragment>;
