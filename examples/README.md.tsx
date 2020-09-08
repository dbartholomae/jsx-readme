/* @jsx MD */
import MD, {
  CodeBlock,
  Component,
  Fragment,
  Heading,
  Image,
  LineBreak,
  Link,
  render,
  Text,
} from "..";
import { writeFileSync } from "fs";
import pkg from "../package.json";

const Readme: Component = () => (
  <Fragment>
    <Heading level={1}>{pkg.name}</Heading>
    <Link to="https://npmjs.org/package/jsx-readme">
      <Image src="https://badge.fury.io/js/jsx-readme.svg">npm version</Image>
    </Link>
    <LineBreak />
    <Link to="https://npmjs.org/package/jsx-readme">
      <Image src="https://img.shields.io/npm/dw/jsx-readme.svg">
        downloads
      </Image>
    </Link>
    <LineBreak />
    <Link to="https://github.com/dbartholomae/jsx-readme/issues">
      <Image src="https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg">
        open issues
      </Image>
    </Link>
    <LineBreak />
    <Link to='https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build+and+deploy"'>
      <Image src="https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main">
        build status
      </Image>
    </Link>
    <LineBreak />
    <Link to="https://codecov.io/gh/dbartholomae/jsx-readme">
      <Image src="https://codecov.io/gh/dbartholomae/jsx-readme/branch/main/graph/badge.svg">
        codecov
      </Image>
    </Link>
    <LineBreak />
    <Link to="https://david-dm.org/dbartholomae/jsx-readme">
      <Image src="https://david-dm.org/dbartholomae/jsx-readme.svg?theme=shields.io">
        dependency status
      </Image>
    </Link>
    <LineBreak />
    <Link to="https://david-dm.org/dbartholomae/jsx-readme?type=dev">
      <Image src="https://david-dm.org/dbartholomae/jsx-readme/dev-status.svg">
        devDependency status
      </Image>
    </Link>
    <LineBreak />
    <LineBreak />
    <Text>{pkg.description}</Text>
    <LineBreak />
    <LineBreak />
    <Heading level={2}>Usage</Heading>
    <CodeBlock language="tsx">
      {`// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak, render, Text } from "jsx-readme";
import { writeFileSync } from "fs";
import pkg from "./package.json";

const Readme: Component = () => (
  <>
    <Heading level={1}>{pkg.name}</Heading>
    <Text>{pkg.description}</Text>
    <LineBreak />
  </>
);

// Currently, the rendering function is not always necessary.
// This might change in the future, though, so do not rely on any
// intermediate results from creating elements.
writeFileSync("README.md", render(<Readme />));`}
    </CodeBlock>
  </Fragment>
);

writeFileSync("examples/README.md", render(<Readme />));
