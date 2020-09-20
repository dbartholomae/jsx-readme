/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { CodeBlock, Fragment, Heading } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import * as fs from "fs";
import * as path from "path";

interface Props {
  encoding?: BufferEncoding;
  pkg: PackageJSON;
}

export const ExamplesFromPkg: Component<Props> = ({
  pkg,
  encoding = "utf8",
}) => {
  const examplesFolder = pkg.directories?.example;
  if (examplesFolder === undefined) {
    return null;
  }

  const filenames = fs.readdirSync(examplesFolder);
  const examples = filenames.map((fileName) => ({
    fileName,
    fileType: path.parse(fileName).ext.slice(1),
    content: fs.readFileSync(path.join(examplesFolder, fileName), {
      encoding,
    }),
  }));
  return (
    <Fragment>
      <Heading level={2}>Examples</Heading>
      {examples.map(({ fileName, content, fileType }) => (
        <CodeBlock key={fileName} language={fileType}>
          {content}
        </CodeBlock>
      ))}
    </Fragment>
  );
};
