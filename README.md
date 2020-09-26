# jsx-readme

[![npm package](https://badge.fury.io/js/jsx-readme.svg)](https://npmjs.org/package/jsx-readme)
[![downloads](https://img.shields.io/npm/dw/jsx-readme.svg)](https://npm-stat.com/charts.html?package=jsx-readme)
[![bundle size](https://img.shields.io/bundlephobia/minzip/jsx-readme.svg)](https://bundlephobia.com/result?p=jsx-readme)
[![open issues](https://img.shields.io/github/issues-raw/dbartholomae/jsx-readme.svg)](https://github.com/dbartholomae/jsx-readme/issues)
[![dependency status](https://david-dm.org/dbartholomae/jsx-readme.svg?theme=shields.io)](https://david-dm.org/dbartholomae/jsx-readme)
[![devDependency status](https://david-dm.org/dbartholomae/jsx-readme/dev-status.svg)](https://david-dm.org/dbartholomae/jsx-readme?type=dev)
[![GitHub Top language](https://img.shields.io/github/languages/top/dbartholomae/jsx-readme)](https://github.com/dbartholomae/jsx-readme)
[![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release#badge)
[![jsx-readme](https://img.shields.io/badge/jsx--readme-lightgrey)](https://dbartholomae.github.io/jsx-readme)
[![codecov](https://codecov.io/gh/dbartholomae/jsx-readme/branch/main/graph/badge.svg)](https://codecov.io/gh/dbartholomae/jsx-readme)
[![build status](https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main)](https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy")

Generate Readme files with a React\-like syntax and package\.json\-aware helpers\.

## Installation

Add `jsx-readme` to your `devDependencies` and install it. I recommend using it with `ts-node`. Then all you need to do is add a file like in the example below and run it via `ts-node` whenever you want to create a new version of the `README`.

## Examples

### package.json

```json
{
  "name": "jsx-readme",
  "version": "0.0.0",
  "description": "Generate Readme files with a React-like syntax and package.json-aware helpers.",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build": "rimraf lib && tsc -p tsconfig.build.json",
    "docs": "typedoc && touch docs/.nojekyll",
    "lint": "eslint src/**/*.ts src/**/*.tsx examples/**/*.tsx",
    "test": "jest && pkg-ok"
  },
  "engines": {
    "node": ">=12.4.0"
  },
  "files": [
    "lib"
  ],
  "keywords": [
    "Markdown",
    "generator",
    "JSX",
    "MD",
    "Readme"
  ],
  "author": "Daniel Bartholomae <daniel@bartholomae.name> (https://startup-cto.net)",
  "license": "MIT",
  "homepage": "https://dbartholomae.github.io/jsx-readme",
  "repository": "git@github.com:dbartholomae/jsx-readme.git",
  "bugs": "https://github.com/dbartholomae/jsx-readme/issues",
  "directories": {
    "lib": "lib",
    "doc": "docs",
    "example": "examples"
  },
  "dependencies": {
    "jsx-md": "^1.2.0"
  },
  "devDependencies": {
    "@commitlint/cli": "^9.1.2",
    "@commitlint/config-conventional": "^9.1.2",
    "@semantic-release/git": "^9.0.0",
    "@types/jest": "^26.0.10",
    "@types/react": "^16.9.49",
    "@typescript-eslint/eslint-plugin": "^4.1.0",
    "@typescript-eslint/parser": "^4.1.0",
    "eslint": "^7.8.1",
    "eslint-config-prettier": "^6.10.1",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.20.6",
    "husky": "^4.2.5",
    "jest": "^26.4.2",
    "lint-staged": "^10.2.13",
    "pkg-ok": "^2.3.1",
    "prettier": "^2.1.0",
    "rimraf": "^3.0.2",
    "semantic-release": "^17.1.1",
    "ts-jest": "^26.2.0",
    "tslib": "^2.0.1",
    "typedoc": "^0.19.1",
    "typedoc-plugin-param-names": "^1.0.2",
    "typedoc-plugin-sourcefile-url": "^1.0.6",
    "typescript": "^4.0.2"
  }
}
```

### README.md.tsx

```tsx
// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import type { Component } from "jsx-readme";
import MD, {
  BadgesFromPkg,
  CodecovBadge,
  DescriptionFromPkg,
  ExamplesFromPkg,
  Fragment,
  GithubWorkflowBadge,
  HomepageFromPkg,
  renderToFile,
  TitleFromPkg,
} from "jsx-readme";
import { Heading, InlineCode, LineBreak } from "jsx-md";
import pkg from "./package.json";

const Readme: Component = () => (
  <Fragment>
    {/* Create a header with title, badges and description inferred from package.json */}
    <TitleFromPkg pkg={pkg} />
    <BadgesFromPkg pkg={pkg} />
    {/* Add additional badges. */}
    <CodecovBadge pkg={pkg} />
    <GithubWorkflowBadge pkg={pkg} workflowName="Build and deploy" />
    <LineBreak />
    <DescriptionFromPkg pkg={pkg} />
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

void renderToFile("./README.md", <Readme />);
```

## Homepage

You can find more about this on [https://dbartholomae.github.io/jsx-readme](https://dbartholomae.github.io/jsx-readme).
