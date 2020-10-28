/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment, Heading, LineBreak, Link, Text } from "jsx-md";

/** @internal */
interface Props {
  contributingFilePath?: string;
  title?: string;
}
const defaultTitle = "🖋️ Contributing";
/** Displays a contributing section based on optional contributing file path. */
export const ContributingSection: Component<Props> = ({
  contributingFilePath = "./CONTRIBUTING.md",
  title,
}: Props) => {
  return (
    <Fragment>
      <Heading level={2}>{title || defaultTitle}</Heading>
      <Text>
        If you are interested in contributing to this repository, please read up
        on the details in our
      </Text>{" "}
      <Link to={contributingFilePath}>contributing guidelines</Link>.
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
