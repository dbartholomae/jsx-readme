/* @jsx MD */
import { Component } from "jsx-md";
import MD, { Fragment } from "jsx-md";

/** @internal */
interface Props {
  contributors: Contributor[];
  itemsPerRow?: number;
  avatarSize?: number;
}
export interface Contributor {
  id: number;
  name: string;
}

/** Displays a contributors table with avatar. This component returns raw HTML for a more complex layout structure. */
export const ContributorsTable: Component<Props> = ({
  contributors,
  itemsPerRow = 6,
  avatarSize = 100,
}) => {
  if (!contributors || contributors.length <= 0) {
    return null;
  }

  const rows = [
    ...Array<Contributor>(Math.ceil(contributors.length / itemsPerRow)),
  ].map((_, i) =>
    contributors.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow)
  );

  return (
    <Fragment>
      {"<table>"}
      {rows.map((contributors, idx) => (
        <Fragment key={idx}>
          {"<tr>"}
          {contributors.map((contributor) => (
            <Fragment key={contributor.id}>
              {'<td align="center">'}
              {`<a title="${contributor.name}'s GitHub profile" href="https://github.com/${contributor.name}">`}
              {`<img alt="${contributor.name}" src="https://avatars.githubusercontent.com/u/${contributor.id}?s=${avatarSize}" width="${avatarSize}px">`}
              {"</a>"}
              {"<br />"}
              {`<a title="${contributor.name}'s GitHub profile" href="https://github.com/${contributor.name}">`}
              {"<sub>"}
              {"<b>"}
              {contributor.name}
              {"</b>"}
              {"</sub>"}
              {"</a>"}
              {"</td>"}
            </Fragment>
          ))}
          {"</tr>"}
        </Fragment>
      ))}
      {"</table>"}
    </Fragment>
  );
};
