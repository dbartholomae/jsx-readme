/* @jsx MD */
import { Component, Link, UnorderedList } from "jsx-md";
import MD, { Fragment, Heading, LineBreak } from "jsx-md";
import { Funding, PackageJSON } from "../PackageJSON";
import { URL } from "url";

/** @internal */
interface Props {
  pkg: Readonly<PackageJSON>;
  title?: string;
}

const normalizeFunding = (funding: string | Funding): Funding => {
  if (typeof funding === "string") {
    return { type: "", url: funding };
  }
  return funding;
};

/** Displays the descripion from a package.json file. */
export const FundingSectionFromPkg: Component<Props> = ({
  pkg: { funding },
  title = "🤝 Show your support",
}: Props) => {
  if (funding === undefined) {
    return null;
  }

  const fundings = Array.isArray(funding)
    ? funding.map(normalizeFunding)
    : [normalizeFunding(funding)];

  return (
    <Fragment>
      <Heading level={2}>{title}</Heading>
      {
        "Give a ⭐ if this package helped you! You can also support the development of this package by funding."
      }
      <LineBreak />
      <LineBreak />
      <UnorderedList>
        {fundings.map((fund, idx) => (
          <Link key={idx} title={fund.type} to={fund.url}>
            {new URL(fund.url).hostname}
          </Link>
        ))}
      </UnorderedList>
      <LineBreak />
      <LineBreak />
    </Fragment>
  );
};
