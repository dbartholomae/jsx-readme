/* @jsx MD */
import MD, { Component, Fragment } from "..";

/** @internal */
interface Props {
  children: string | string[];
}

/**
 * Wraps a string in a blockquote, automatically taking care of line breaks.
 * @example
 *   ```js
 *   render(<BlockQuote>Test1{'/n'}Test2</BlockQuote>)
 *   ===
 *   `
 *   > Test1
 *   > Test2
 *   `
 *   ```
 */
export const BlockQuote: Component<Props> = ({
  /** The text to be put in a blockquote */
  children,
}) => {
  if (!Array.isArray(children)) {
    return (
      <Fragment>
        {"\n"}
        {">"} {children}
        {"\n"}
      </Fragment>
    );
  }
  return (
    <Fragment>
      {"\n"}
      {">"} {children.flat().join("").split("\n").join("\n> ")}
      {"\n"}
    </Fragment>
  );
};
