/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  strong?: boolean;
}

/**
 * Put emphasis on a text.
 * @example
 *   ```js
 *   render(<Emphasis strong>Test</Emphasis>)
 *   ===
 *   '**Test**'
 *   ```
 */
export const Emphasis: Component<PropsWithChildren<Props>> = ({
  /** The text to put emphasis on. */
  children,
  /** Whether to use a strong (**) or weak (_) emphasis. */
  strong,
}) => {
  const marker = strong ? "**" : "_";
  return (
    <Fragment>
      {marker}
      {children}
      {marker}
    </Fragment>
  );
};
