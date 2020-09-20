/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { CodeBlock, Fragment, Heading, LineBreak } from "jsx-md";
import * as path from "path";

interface Props {
  fileName: string;
  children: string;
}

export const ExampleFile: Component<Props> = ({
  children,
  fileName,
}: Props) => (
  <Fragment>
    <Heading level={3}>{fileName}</Heading>
    <CodeBlock language={path.parse(fileName).ext.slice(1)}>
      {children.trimEnd()}
    </CodeBlock>
    <LineBreak />
  </Fragment>
);
