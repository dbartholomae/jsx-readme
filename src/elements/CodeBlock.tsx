/* @jsx MD */
import MD, { Component, Fragment } from "..";

/** @internal */
interface Props {
  children: string;
  language?: string;
}

/**
 * Wraps a string in a code block.
 * @example
 *   ```js
 *   render(<CodeBlock language="ts">console.log("Test")</CodeBlock>)
 *   ===
 *     '```ts\n'
 *   + 'console.log("Test")\n
 *   + '```\n'
 */
export const CodeBlock: Component<Props> = ({
  /** The code to display */
  children,
  /** The language the code should be formatted in */
  language,
}) => (
  <Fragment>
    ```{language}
    {"\n"}
    {children}
    {"\n"}```{"\n"}
  </Fragment>
);
