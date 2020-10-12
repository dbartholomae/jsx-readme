#!/usr/bin/env node
import * as fs from 'fs';

/**
 * This is the tiny CLI for jsx-readme
 * it has two functions Start() that activates the CLI when called with the handle 'jsx-readme'
 * and CreateReadmeJsx() creates the actual README.md.tsx file
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const _require = require(`child_process`),
  execSync = _require.execSync;
/* eslint-enable @typescript-eslint/naming-convention */
export default class Cli {
  private clear: any = require('clear');
  private figlet: any = require('figlet');
  private path: any = require('path');
  private chalk: any = require('chalk');
  private commander: any = require('commander')
  private pjson: any = require('../package.json');
  constructor() {
  }
  public async Start(): Promise<Boolean> {
    this.clear();
    console.log(
      this.chalk.red(
        this.figlet.textSync('jsx-readme', { horizontalLayout: 'full' })
      )
    );
    this.commander
      .version(this.pjson.version)
      .name('jsx-readme')
      .description("Generate Readme files with a React-like syntax and package.json-aware helpers.")
      .command('init [path]')
      .description('Creates a README.jsx file template in the specified path')
      .action(this.CreateReadmeJsx)
    try {
      await this.commander.parse(process.argv)
    }
    catch {
      return false;
    }
    return true;
  }
  /**
   *
   * @param path the actual path for the README.md.tsx file to be output
   */
  public CreateReadmeJsx(path: string): void {
    console.log('\n')
    console.log('Creating README.md.tsx file in with the following path ' + path);
    //make sure the path is well written
    if (path.charAt(path.length - 1) !== '/') {
      path = path + '/';
      console.log(path)
    }
    // we check if the path given exists
    if (!fs.existsSync(path)) {
      console.error('Path does not exist')
      throw new Error('Path specified does not exist');
    } else {
      const template_readme_file = `// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import type { Component } from "..";
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
  DiscordBadge,
  HacktoberfestBadge,
  } from "..";
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
    <DiscordBadge
      inviteLink="https://discord.com/invite/X9HRSK5"
      serverId="750063320614174871"
    />
    <HacktoberfestBadge
      pkg={pkg}
      year={2020}
      suggestionLabel="good first issue"
    />
    <LineBreak />
    <DescriptionFromPkg pkg={pkg} />
    {/* You can use the components from jsx-md to build custom markdown. */}
    <Heading level={2}>Installation</Heading>
    Add <InlineCode>jsx-readme</InlineCode> to your{" "}
    <InlineCode>devDependencies</InlineCode> and install it. I recommend using
    it with <InlineCode>ts-node</InlineCode>. Then all you need to do is run {" "} <InlineCode>npx jsx-readme init [destinationPath]</InlineCode>
    where the {" "} <InlineCode>[destinationPath]</InlineCode> is where the {" "} <InlineCode>README.md.tsx</InlineCode> file will be outputed and once done
    you run the {" "} <InlineCode>README.md.tsx</InlineCode> via{" "}
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
    `
      try {
        fs.writeFileSync(path + 'README.md.tsx', template_readme_file)
        console.log('README.md.tsx file was created successfully at ' + path)
      } catch (err: any) {
        if (err) {
          console.error("jsx-readme couldn't create template file due to the next error:" + ' ' + err.message)
          throw new Error("jsx-readme couldn't create template file due to the next error:" + ' ' + err.message)
        }
      }
    }
  }
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
const cli = new Cli();

cli.Start();

process.exit(0);
