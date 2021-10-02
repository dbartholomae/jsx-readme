/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment, Image, LineBreak, Link } from "jsx-md";

/** @internal */
interface Props {
  contributors: Contributor[];
  avatarSize?: number;
}
export interface Contributor {
  id: number;
  name: string;
}

/** Displays a contributors list with avatar. */
export const ContributorsList: Component<Props> = ({
  contributors,
  avatarSize = 100,
}) => {
  if (!contributors || contributors.length <= 0) {
    return null;
  }

  return (
    <Fragment>
      {contributors.map((contributor, idx) => (
        <Fragment key={contributor.id}>
          <Link
            to={`https://github.com/${contributor.name}`}
            title={`${contributor.name}'s GitHub profile'`}
          >
            <Image
              src={`https://avatars.githubusercontent.com/u/${contributor.id}?size=${avatarSize}`}
              title={contributor.name}
            >
              {contributor.name}
            </Image>
          </Link>
          {idx !== contributors.length - 1 && <LineBreak />}
        </Fragment>
      ))}
    </Fragment>
  );
};
