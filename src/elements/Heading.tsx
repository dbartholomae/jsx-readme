/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Marks text as a heading.
 * @example
 *   ```js
 *   render(<Heading level={1}>Test</Heading>)
 *   ===
 *   '# Test\n\n'
 */
export const Heading: Component<PropsWithChildren<Props>> = ({
  /** The text to format as heading */
  children,
  /** The level of the heading as represented by the number of # */
  level,
}) => (
  <Fragment>
    {"#".repeat(level)} {children}
    {"\n\n"}
  </Fragment>
);
