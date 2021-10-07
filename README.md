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
[![hits](http://hits.dwyl.com/dbartholomae/jsx-readme.svg)](http://hits.dwyl.com/dbartholomae/jsx-readme)
[![license](https://img.shields.io/github/license/dbartholomae/jsx-readme)](https://github.com/dbartholomae/jsx-readme/blob/main/LICENSE)
[![codecov](https://codecov.io/gh/dbartholomae/jsx-readme/branch/main/graph/badge.svg)](https://codecov.io/gh/dbartholomae/jsx-readme)
[![build status](https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main)](https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy")
[![chat](https://img.shields.io/discord/750063320614174871)](https://discord.com/invite/X9HRSK5)
[![CLA Assistant](https://cla-assistant.io/readme/badge/dbartholomae/jsx-readme)](https://cla-assistant.io/dbartholomae/jsx-readme)
[![hacktoberfest badge](https://img.shields.io/github/hacktoberfest/2021/dbartholomae/jsx-readme?suggestion_label=good%20first%20issue)](https://github.com/dbartholomae/jsx-readme)

Generate Readme files with a React\-like syntax and package\.json\-aware helpers\.

## 🛠 Installation

Add `jsx-readme` and `ts-node` to your `devDependencies`.
```sh
npm i jsx-readme ts-node -D
```
Add these configs to your `tsconfig.json`:
```json

{
  "compilerOptions": {
    "resolveJsonModule": true,
    "jsx": "react"
  }
}
      
```
Create a README.MD template (you may copy the example from this repo examples/README.md.tsx and edit to your taste). Add the following script to your `package.json`:
```json

{
  "scripts": {
    "generate:readme": "ts-node README.md.tsx"
  }
}
      
```


## 🔬 Examples

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
  "homepage": "https://dbartholomae.github.io/jsx-readme-test-fixture",
  "repository": "git@github.com:dbartholomae/jsx-readme-test-fixture.git",
  "bugs": "https://github.com/dbartholomae/jsx-readme-test-fixture/issues",
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
  ContributingSection,
  DescriptionFromPkg,
  ExamplesFromPkg,
  Fragment,
  GithubWorkflowBadge,
  CLAAssistantBadge,
  HomepageFromPkg,
  renderToFile,
  TitleFromPkg,
  DiscordBadge,
  HacktoberfestBadge,
  LicenseBadge,
  LicenseFromPkg,
  ContributorsSectionFromPkg,
} from "jsx-readme";
import { CodeBlock, Heading, InlineCode, LineBreak } from "jsx-md";
import pkg from "./package.json";

const Readme: Component = () => (
  <Fragment>
    {/* Create a header with title, badges and description inferred from package.json */}
    <TitleFromPkg pkg={pkg} />
    <BadgesFromPkg pkg={pkg} />
    {/* Add additional badges. */}
    <LicenseBadge pkg={pkg} />
    <CodecovBadge pkg={pkg} />
    <GithubWorkflowBadge pkg={pkg} workflowName="Build and deploy" />
    <DiscordBadge
      inviteLink="https://discord.com/invite/X9HRSK5"
      serverId="750063320614174871"
    />
    <CLAAssistantBadge pkg={pkg} />
    <HacktoberfestBadge
      pkg={pkg}
      year={2020}
      suggestionLabel="good first issue"
    />
    <LineBreak />
    <DescriptionFromPkg pkg={pkg} />
    {/* You can use the components from jsx-md to build custom markdown. */}
    <Heading level={2}>🛠 Installation</Heading>
    Add <InlineCode>jsx-readme</InlineCode> and <InlineCode>ts-node</InlineCode>{" "}
    to your <InlineCode>devDependencies</InlineCode>.
    <LineBreak />
    <CodeBlock language="sh">npm i jsx-readme ts-node -D</CodeBlock>
    Add these configs to your <InlineCode>tsconfig.json</InlineCode>:
    <LineBreak />
    <CodeBlock language="json">
      {`
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "jsx": "react"
  }
}
      `}
    </CodeBlock>
    Create a README.MD template (you may copy the example from this repo
    examples/README.md.tsx and edit to your taste). Add the following script to
    your <InlineCode>package.json</InlineCode>:
    <LineBreak />
    <CodeBlock language="json">
      {`
{
  "scripts": {
    "generate:readme": "ts-node README.md.tsx"
  }
}
      `}
    </CodeBlock>
    <LineBreak />
    <LineBreak />
    {/* Create an example section based on all files from the example directory set up in package.json */}
    <ExamplesFromPkg pkg={pkg} />
    {/* Create a section linking to the homepage from package.json */}
    <HomepageFromPkg pkg={pkg} />
    {/* Create a section linking to the contributing guidelines file */}
    <ContributingSection />
    {/* Create a section linking to the contributors of the repo */}
    <ContributorsSectionFromPkg pkg={pkg} />
    {/* Create a section linking to the license file. */}
    <LicenseFromPkg pkg={pkg} />
  </Fragment>
);

void renderToFile("./test/README.actual.md", <Readme />);
```

## 🏠 Homepage

You can find more about this on [https://dbartholomae.github.io/jsx-readme](https://dbartholomae.github.io/jsx-readme).

## 🖋️ Contributing

If you are interested in contributing to this repository, please read up on the details in our [contributing guidelines](./CONTRIBUTING.md).

## ‍💼 Contributors

This package only works thanks to [all of our contributors](https://github.com/dbartholomae/jsx-readme/graphs/contributors).

<table><tr><td align="center"><a title="dbartholomae's GitHub profile" href="https://github.com/dbartholomae"><img alt="dbartholomae" src="https://avatars.githubusercontent.com/u/3396992?s=100" width="100px"></a><br /><a title="dbartholomae's GitHub profile" href="https://github.com/dbartholomae"><sub><b>dbartholomae</b></sub></a></td><td align="center"><a title="semantic-release-bot's GitHub profile" href="https://github.com/semantic-release-bot"><img alt="semantic-release-bot" src="https://avatars.githubusercontent.com/u/32174276?s=100" width="100px"></a><br /><a title="semantic-release-bot's GitHub profile" href="https://github.com/semantic-release-bot"><sub><b>semantic-release-bot</b></sub></a></td><td align="center"><a title="junwen-k's GitHub profile" href="https://github.com/junwen-k"><img alt="junwen-k" src="https://avatars.githubusercontent.com/u/40173716?s=100" width="100px"></a><br /><a title="junwen-k's GitHub profile" href="https://github.com/junwen-k"><sub><b>junwen-k</b></sub></a></td><td align="center"><a title="KwanJunWen's GitHub profile" href="https://github.com/KwanJunWen"><img alt="KwanJunWen" src="https://avatars.githubusercontent.com/u/40483304?s=100" width="100px"></a><br /><a title="KwanJunWen's GitHub profile" href="https://github.com/KwanJunWen"><sub><b>KwanJunWen</b></sub></a></td><td align="center"><a title="MDShields7's GitHub profile" href="https://github.com/MDShields7"><img alt="MDShields7" src="https://avatars.githubusercontent.com/u/32501364?s=100" width="100px"></a><br /><a title="MDShields7's GitHub profile" href="https://github.com/MDShields7"><sub><b>MDShields7</b></sub></a></td><td align="center"><a title="AJMcDee's GitHub profile" href="https://github.com/AJMcDee"><img alt="AJMcDee" src="https://avatars.githubusercontent.com/u/22745495?s=100" width="100px"></a><br /><a title="AJMcDee's GitHub profile" href="https://github.com/AJMcDee"><sub><b>AJMcDee</b></sub></a></td></tr><tr><td align="center"><a title="tancredosouza's GitHub profile" href="https://github.com/tancredosouza"><img alt="tancredosouza" src="https://avatars.githubusercontent.com/u/13404051?s=100" width="100px"></a><br /><a title="tancredosouza's GitHub profile" href="https://github.com/tancredosouza"><sub><b>tancredosouza</b></sub></a></td><td align="center"><a title="Ruchika30's GitHub profile" href="https://github.com/Ruchika30"><img alt="Ruchika30" src="https://avatars.githubusercontent.com/u/16018506?s=100" width="100px"></a><br /><a title="Ruchika30's GitHub profile" href="https://github.com/Ruchika30"><sub><b>Ruchika30</b></sub></a></td><td align="center"><a title="anshdhinhgra47's GitHub profile" href="https://github.com/anshdhinhgra47"><img alt="anshdhinhgra47" src="https://avatars.githubusercontent.com/u/56676059?s=100" width="100px"></a><br /><a title="anshdhinhgra47's GitHub profile" href="https://github.com/anshdhinhgra47"><sub><b>anshdhinhgra47</b></sub></a></td><td align="center"><a title="gedaiu's GitHub profile" href="https://github.com/gedaiu"><img alt="gedaiu" src="https://avatars.githubusercontent.com/u/4217037?s=100" width="100px"></a><br /><a title="gedaiu's GitHub profile" href="https://github.com/gedaiu"><sub><b>gedaiu</b></sub></a></td><td align="center"><a title="i-am-jeetu's GitHub profile" href="https://github.com/i-am-jeetu"><img alt="i-am-jeetu" src="https://avatars.githubusercontent.com/u/66921514?s=100" width="100px"></a><br /><a title="i-am-jeetu's GitHub profile" href="https://github.com/i-am-jeetu"><sub><b>i-am-jeetu</b></sub></a></td><td align="center"><a title="Pipo93's GitHub profile" href="https://github.com/Pipo93"><img alt="Pipo93" src="https://avatars.githubusercontent.com/u/12968697?s=100" width="100px"></a><br /><a title="Pipo93's GitHub profile" href="https://github.com/Pipo93"><sub><b>Pipo93</b></sub></a></td></tr></table>

[+ 3 contributors](https://github.com/dbartholomae/jsx-readme/graphs/contributors)

## 📜 License

MIT. See [LICENSE file](./LICENSE) for details.

