/* @jsx Md */
import type { Component } from "jsx-md";
import Md, { awaitComponent, Fragment, Heading } from "jsx-md";
import type { PackageJSON } from "../PackageJSON";
import { promises as fs } from "fs";
import * as path from "path";
import { CodeFile } from "./CodeFile";

/** @internal */
interface Props {
  encoding?: BufferEncoding;
  replacePackageImportsWithPackageName?: boolean;
  pkg: PackageJSON;
}

/** Show all files from the example directory defined in package.json.² */
export const ExamplesFromPkg: Component<Props> = awaitComponent(
  async ({
    pkg,
    /** The encoding to use for loading all files. */
    encoding = "utf8",
    /** Whether to replace all imports from '..' with imports from 'package-name' */
    replacePackageImportsWithPackageName = true,
  }) => {
    const examplesFolder = pkg.directories?.example;
    if (examplesFolder === undefined) {
      return null;
    }

    const filenames = await fs.readdir(examplesFolder);
    const examples = await Promise.all(
      filenames.map(async (fileName) => ({
        fileName,
        content: await fs.readFile(path.join(examplesFolder, fileName), {
          encoding,
        }),
      }))
    );

    const replacements = replacePackageImportsWithPackageName
      ? [
          {
            find: /from ".."/g,
            replace: `from "${pkg.name}"`,
          },
        ]
      : [];

    return (
      <Fragment>
        <Heading level={2}>🔬 Examples</Heading>
        {examples
          .sort(({ fileName: fileNameA }, { fileName: fileNameB }) =>
            fileNameA.localeCompare(fileNameB, "en", { sensitivity: "base" })
          )
          .map(({ fileName, content }) => (
            <CodeFile
              key={fileName}
              fileName={fileName}
              replacements={replacements}
            >
              {content}
            </CodeFile>
          ))}
      </Fragment>
    );
  }
);
