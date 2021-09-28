/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment, Heading, LineBreak, Link, Text } from "jsx-md";
import { PackageJSON } from "../PackageJSON";
import { extractGithubOwnerAndRepo } from "./badges/utils/extractGithubOwnerAndRepo";

/** @internal */
interface Props {
  title?: string;
  pkg: PackageJSON;
}
/** Displays a contributors section. */
export const ContributorsSection: Component<Props> = ({
  title = "‍💼 Contributors",
  pkg,
}: Props) => {
  const repoData = extractGithubOwnerAndRepo(pkg.repository);
  if (repoData === undefined) {
    return null;
  }

  const { repo, owner } = repoData;

  return (
    <Fragment>
      <Heading level={2}>{title}</Heading>
      <Text>This package only works thanks to</Text>{" "}
      <Link to={`https://github.com/${owner}/${repo}/graphs/contributors`}>all of our contributors</Link>.
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
