/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { CodeBlock, Fragment, Heading } from "jsx-md";

interface Props {
  fileName: string;
  language: string;
  children: string;
}

export const ExampleFile: Component<Props> = ({
  children,
  fileName,
  language,
}: Props) => (
  <Fragment>
    <Heading level={3}>{fileName}</Heading>
    <CodeBlock language={language}>{children}</CodeBlock>
  </Fragment>
);
