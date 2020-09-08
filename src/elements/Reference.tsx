/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  label: string;
  title?: string;
}

/**
 * @example
 *   ```js
 *   render(<Reference label="1" title="Title">
 *     https://example.com
 *   </Reference>)
 *   ===
 *   '\n[1]: https://example.com "Title"\n'
 */
export const Reference: Component<PropsWithChildren<Props>> = ({
  children,
  label,
  title,
}) => (
  <Fragment>
    {"\n["}
    {label}
    {"]: "}
    {children}
    {title ? ` "${title}"` : null}
    {"\n"}
  </Fragment>
);
