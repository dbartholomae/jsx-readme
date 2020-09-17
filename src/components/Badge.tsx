/* @jsx MD */
import MD, { Component, Fragment, Image, LineBreak, Link } from "jsx-md";

interface Props {
  link: string;
  imageSource: string;
  children: string;
}

export const Badge: Component<Props> = ({
  children,
  imageSource,
  link,
}: Props) => {
  return (
    <Fragment>
      <Link to={link}>
        <Image src={imageSource}>{children}</Image>
      </Link>
      <LineBreak />
    </Fragment>
  );
};
