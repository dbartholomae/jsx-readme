/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

/** @internal */
interface Props {
  children: MarkdownNode[];
}

/**
 * @example
 *   ```js
 *   render(<UnorderedList>
 *     {"a"}
 *     {"b"}
 *     {"c"}
 *   </UnorderedList>)
 *   ===
 *   `* a
 *   * b
 *   * c
 *   `
 */
export const UnorderedList: Component<Props> = ({ children }) => {
  return (
    <Fragment>
      {children.map((child, index) => (
        <Fragment key={index}>
          * {child}
          {"\n"}
        </Fragment>
      ))}
    </Fragment>
  );
};
