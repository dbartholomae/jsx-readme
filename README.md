# jsx-md

[![npm version](https://badge.fury.io/js/jsx-md.svg)](https://npmjs.org/package/jsx-md)
[![downloads](https://img.shields.io/npm/dw/jsx-md.svg)](https://npmjs.org/package/jsx-md)
[![open issues](https://img.shields.io/github/issues-raw/dbartholomae/jsx-md.svg)](https://github.com/dbartholomae/jsx-md/issues)
[![build status](https://github.com/dbartholomae/jsx-md/workflows/Build%20and%20deploy/badge.svg?branch=main)](https://github.com/dbartholomae/jsx-md/actions?query=workflow%3A"Build+and+deploy")
[![codecov](https://codecov.io/gh/dbartholomae/jsx-md/branch/main/graph/badge.svg)](https://codecov.io/gh/dbartholomae/jsx-md)
[![dependency status](https://david-dm.org/dbartholomae/jsx-md.svg?theme=shields.io)](https://david-dm.org/dbartholomae/jsx-md)
[![devDependency status](https://david-dm.org/dbartholomae/jsx-md/dev-status.svg)](https://david-dm.org/dbartholomae/jsx-md?type=dev)

Generate markdown files with a React\-like syntax.

## Usage

```tsx
// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-md
/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { Component, Fragment, Heading, LineBreak, render, Text } from "jsx-md";
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
writeFileSync("README.md", render(<Readme />));
```

## Documentation

There's a [documentation](https://dbartholomae.github.io/jsx-md) of all elements you can use.
