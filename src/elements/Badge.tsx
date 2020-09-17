/* @jsx MD */
import MD, { Fragment, Image, LineBreak, Link } from "jsx-md";

export function Badge({
  children,
  imageSource,
  to,
}: {
  to: string;
  imageSource: string;
  children: string;
}) {
  return (
    <Fragment>
      <Link to={to}>
        <Image src={imageSource}>{children}</Image>
      </Link>
      <LineBreak />
    </Fragment>
  );
}
