// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import type { Component } from "jsx-md";
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
} from "./src";
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
    <HacktoberfestBadge pkg={pkg} suggestionLabel="good first issue" />
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

void renderToFile("./README.md", <Readme />);
