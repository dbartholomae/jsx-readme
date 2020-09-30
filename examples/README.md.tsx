// We need to tell the JSX transpiler that in this file,
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
  HacktoberfestBadge,
  DiscordBadge
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
    <HacktoberfestBadge
      pkg={pkg}
      year={2020}
      suggestionLabel="good first issue" />
    <DiscordBadge
      inviteLink="https://discord.com/invite/X9HRSK5"
      serverId="750063320614174871"
    />
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
