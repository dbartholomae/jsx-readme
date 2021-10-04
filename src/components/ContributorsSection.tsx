/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment, Heading, LineBreak, Link, Text } from "jsx-md";
import { ContributorsTable } from "./ContributorsTable";
import type { Contributor } from "./ContributorsTable";

/** @internal */
interface Props {
  title?: string;
  repo: string;
  owner: string;
  contributors: Contributor[];
  additionalContributorsCount?: number;
}
/** Displays a contributors section. */
export const ContributorsSection: Component<Props> = ({
  title = "‍💼 Contributors",
  repo,
  owner,
  contributors,
  additionalContributorsCount,
}) => (
  <Fragment>
    <Heading level={2}>{title}</Heading>
    <Text>This package only works thanks to</Text>{" "}
    <Link to={`https://github.com/${owner}/${repo}/graphs/contributors`}>
      all of our contributors
      {contributors.length <= 0 &&
        additionalContributorsCount &&
        ` (${additionalContributorsCount})`}
    </Link>
    .
    <LineBreak />
    <LineBreak />
    <ContributorsTable contributors={contributors} />
    {contributors.length > 0 && additionalContributorsCount && (
      <Fragment>
        <LineBreak />
        <LineBreak />
        <Link to={`https://github.com/${owner}/${repo}/graphs/contributors`}>
          {`+ ${additionalContributorsCount.toLocaleString(
            "en-US"
          )} contributors`}
        </Link>
      </Fragment>
    )}
    <LineBreak />
    <LineBreak />
  </Fragment>
);
