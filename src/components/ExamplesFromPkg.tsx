/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { Fragment, Heading } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import * as fs from "fs";
import * as path from "path";
import { CodeFile } from "./CodeFile";

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
    content: fs.readFileSync(path.join(examplesFolder, fileName), {
      encoding,
    }),
  }));
  return (
    <Fragment>
      <Heading level={2}>Examples</Heading>
      {examples.map(({ fileName, content }) => (
        <CodeFile key={fileName} fileName={fileName}>
          {content}
        </CodeFile>
      ))}
    </Fragment>
  );
};
