/* @jsx MD */
import MD, { Component, Fragment, MarkdownNil, MarkdownText } from "..";

type MarkdownTextOrNil = MarkdownText | MarkdownNil;

/** @internal */
interface Props {
  children: MarkdownTextOrNil | MarkdownTextOrNil[];
}

/** @internal */
function escape(str: MarkdownTextOrNil): string | undefined {
  if (str === null || str === undefined || str === false) {
    return undefined;
  }
  const charsToEscapeRegex = /[!.\-\+\\#\(\)\[\]\{\}_\*`]/g;
  return str.toString().replace(charsToEscapeRegex, (match) => `\\${match}`);
}
/**
 * Escapes text content into markdown text.
 * @example
 *   ```js
 *   render(<Text>(Parantheses in [parantheses])</Text>)
 *   ===
 *   '\(Parantheses in \[parantheses\]\)'
 *   ```
 */
export const Text: Component<Props> = ({ children }) => {
  if (Array.isArray(children)) {
    return <Fragment>{children.map(escape)}</Fragment>;
  }
  return <Fragment>{escape(children)}</Fragment>;
};
