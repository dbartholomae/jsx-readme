/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment, Heading, LineBreak, Link, Text } from "jsx-md";
import { ContributorsList } from "./ContributorsList";
import type { Contributor } from "./ContributorsList";

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
    </Link>
    .
    <LineBreak />
    <LineBreak />
    <ContributorsList contributors={contributors} />
    {additionalContributorsCount && (
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
