/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

/** @internal */
interface Props {
  children: MarkdownNode[];
}

/**
 * @example
 *   ```js
 *   render(<OrderedList>
 *     {"a"}
 *     {"b"}
 *     {"c"}
 *   </OrderedList>)
 *   ===
 *   `1. a
 *   2. b
 *   3. c
 *   `
 */
export const OrderedList: Component<Props> = ({ children }) => {
  return (
    <Fragment>
      {children.map((child, index) => (
        <Fragment key={index}>
          {index + 1}. {child}
          {"\n"}
        </Fragment>
      ))}
    </Fragment>
  );
};
