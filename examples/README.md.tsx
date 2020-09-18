// We need to tell the JSX transpiler that in this file,
// instead of React we use the custom createElement and Fragment
// functions from jsx-readme
/* @jsx MD */
/* @jsxFrag Fragment */
import type { Component } from "..";
import MD, {
  ExamplesFromPkg,
  Fragment,
  HeaderFromPkg,
  HomepageFromPkg,
  renderToFile,
} from "..";
import { Heading, InlineCode, LineBreak } from "jsx-md";
import pkg from "../test/package.json";

const Readme: Component = () => (
  <Fragment>
    {/* Create a header with title, description and badges inferred from package.json */}
    {/* Enable an additional badge via override. */}
    <HeaderFromPkg
      pkg={pkg}
      overrideBadges={{
        codecov: true,
        githubWorkflow: { workflowName: "Build and deploy" },
      }}
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
