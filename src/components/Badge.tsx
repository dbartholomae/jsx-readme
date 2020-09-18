/* @jsx MD */
import type { Component } from "jsx-md";
import MD, { Fragment, Image, LineBreak, Link } from "jsx-md";

interface Props {
  link: string;
  imageSource: string;
  children: string;
}

export const Badge: Component<Readonly<Props>> = ({
  children,
  imageSource,
  link,
}) => {
  return (
    <Fragment>
      <Link to={link}>
        <Image src={imageSource}>{children}</Image>
      </Link>
      <LineBreak />
    </Fragment>
  );
};
