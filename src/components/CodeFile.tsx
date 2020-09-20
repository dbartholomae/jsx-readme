/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { CodeBlock, Fragment, Heading, LineBreak } from "jsx-md";
import * as path from "path";

interface Replacement {
  find: RegExp;
  replace: string;
}

interface Props {
  fileName: string;
  children: string;
  replacements?: Replacement[];
}

export const CodeFile: Component<Props> = ({
  children,
  fileName,
  replacements = [],
}) => {
  function executeReplacements(str: string): string {
    return replacements.reduce(
      (replacedStr, replacement) =>
        replacedStr.replace(replacement.find, replacement.replace),
      str
    );
  }

  return (
    <Fragment>
      <Heading level={3}>{fileName}</Heading>
      <CodeBlock language={path.parse(fileName).ext.slice(1)}>
        {executeReplacements(children.trimEnd())}
      </CodeBlock>
      <LineBreak />
    </Fragment>
  );
};
