# jsx-readme

[![npm package](https://badge.fury.io/js/jsx-readme.svg)](https://npmjs.org/package/jsx-readme)
[![downloads](https://img.shields.io/npm/dw/jsx-readme.svg)](https://npmjs.org/package/jsx-readme)
[![open issues](https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg)](https://github.com/dbartholomae/jsx-readme/issues)
[![build status](https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main)](https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy")
[![codecov](https://codecov.io/gh/dbartholomae/jsx-readme/branch/main/graph/badge.svg)](https://codecov.io/gh/dbartholomae/jsx-readme)
[![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release#badge)
[![dependency status](https://david-dm.org/dbartholomae/jsx-readme.svg?theme=shields.io)](https://david-dm.org/dbartholomae/jsx-readme)
[![devDependency status](https://david-dm.org/dbartholomae/jsx-readme/dev-status.svg)](https://david-dm.org/dbartholomae/jsx-readme?type=dev)
[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)

Generate Readme files with a React\-like syntax and package\.json\-aware helpers\.

## Installation

Add `jsx-readme` to your `devDependencies` and install it. I recommend using it with `ts-node`. Then all you need to do is add a file like in the example below and run it via `ts-node` whenever you want to create a new version of the `README`.

## Examples

### README.md.tsx

```tsx
// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import type { Component } from "jsx-readme";
import MD, {
  ExamplesFromPkg,
  Fragment,
  HeaderFromPkg,
  HomepageFromPkg,
  renderToFile,
} from "jsx-readme";
import { Heading, InlineCode, LineBreak } from "jsx-md";
import pkg from "../test/package.json";

const Readme: Component = () => (
  <Fragment>
    {/* Create a header with title, description and badges inferred from package.json */}
    {/* Enable an additional badge via override. */}
    <HeaderFromPkg
      pkg={pkg}
      overrideBadges={{ codecov: true, githubWorkflow: "Build and deploy" }}
    />
    {/* You can use the components from jsx-md to build custom markdown. */}
    <Heading level={2}>Installation</Heading>
    Add <InlineCode>jsx-readme</InlineCode> to your{" "}
    <InlineCode>devDependencies</InlineCode> and install it. I recommend using
    it with <InlineCode>ts-node</InlineCode>. Then all you need to do is add a
    file like in the example below and run it via{" "}
    <InlineCode>ts-node</InlineCode> whenever you want to create a new version
    of the <InlineCode>README</InlineCode>.
    <LineBreak />
    <LineBreak />
    {/* Create an example section based on all files from the example directory set up in package.json */}
    <ExamplesFromPkg pkg={pkg} />
    {/* Create a section linking to the homepage from package.json */}
    <HomepageFromPkg pkg={pkg} />
  </Fragment>
);

void renderToFile("./test/README.md", <Readme />);
```

## Homepage

You can find more about this on [https://dbartholomae.github.io/jsx-readme](https://dbartholomae.github.io/jsx-readme).
