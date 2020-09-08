/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  reference?: string;
}

/**
 * @example
 *   ```js
 *   render(<ReferenceLink reference="1">Link text</ReferenceLink>)
 *   ===
 *   '[Link text][1]'
 */
export const ReferenceLink: Component<PropsWithChildren<Props>> = ({
  children,
  reference,
}) => (
  <Fragment>
    {"["}
    {children}
    {"]"}
    {reference ? (
      <Fragment>
        {"["}
        {reference}
        {"]"}
      </Fragment>
    ) : null}
  </Fragment>
);
