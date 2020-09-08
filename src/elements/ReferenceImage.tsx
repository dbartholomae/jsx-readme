/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  reference: string;
}

/**
 * @example
 *   ```js
 *   render(<ReferenceImage reference="logo">
 *     Alternative text
 *   </ReferenceImage>)
 *   ===
 *   '![Alternative text][logo]'
 */
export const ReferenceImage: Component<PropsWithChildren<Props>> = ({
  children,
  reference,
}) => (
  <Fragment>
    {"!["}
    {children}
    {"]"}
    {"["}
    {reference}
    {"]"}
  </Fragment>
);
