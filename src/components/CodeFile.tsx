/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { CodeBlock, Fragment, Heading, LineBreak } from "jsx-md";
import * as path from "path";

/**
 * Defines a regex to search with and a string that should be used
 * to replace the results found.
 */
interface Replacement {
  find: RegExp;
  replace: string;
}

/** @internal */
interface Props {
  fileName: string;
  children: string;
  replacements?: Replacement[];
}

/** Displays a code file with a heading and a codeblock. */
export const CodeFile: Component<Props> = ({
  /** The file's content. */
  children,
  fileName,
  /**
   * A list of replacements to be made in the file's content,
   * e. g. for replacing relative import paths.
   * */
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
