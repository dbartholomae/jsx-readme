/* @jsx MD */
import MD, { Fragment, Image, LineBreak, Link } from "jsx-md";

export function Badge({
  children,
  imageSource,
  link,
}: {
  link: string;
  imageSource: string;
  children: string;
}) {
  return (
    <Fragment>
      <Link to={link}>
        <Image src={imageSource}>{children}</Image>
      </Link>
      <LineBreak />
    </Fragment>
  );
}
