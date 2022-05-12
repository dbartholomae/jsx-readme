/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment, Heading } from "jsx-md";

interface Props {
  title?: string;
}

export const SetupInstructions: Component<Props> = ({
  title = "Set up instructions"
}) => {
  return (
    <Fragment>
      <Heading level={2}>{title}</Heading>
    </Fragment>
  )
}
