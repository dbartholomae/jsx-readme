/* @jsx MD */
import MD, { Component, Fragment, MarkdownChildren, MarkdownElement } from "..";
import { intersperse } from "../util/intersperse";

/** @internal */
interface Props<Headers extends string> {
  body: Record<Headers, MarkdownChildren>[];
  headers: Record<Headers, MarkdownChildren>;
}

/** @internal */
function renderRow(entries: Record<string, MarkdownChildren>): MarkdownElement {
  return (
    <Fragment>
      {Object.values(entries).map((entry: MarkdownChildren, index: number) => (
        <Fragment key={index}>
          {" "}
          {entry}
          {" |"}
        </Fragment>
      ))}
    </Fragment>
  );
}

/** @internal */
function renderSeparator(columnWidths: number[]): string {
  return columnWidths
    .map((width: number) => ` ${"-".repeat(width)} |`)
    .join("");
}

/** @internal */
function sortKeysInOrderOf<Obj extends Record<string, unknown>>(
  keys: (keyof Obj)[]
): (obj: Obj) => Obj {
  return (obj: Obj) =>
    keys.reduce((bodyAccumulator, header) => {
      /* istanbul ignore next */
      const { [header]: _omitted, ...bodyWithoutHeader } = bodyAccumulator;
      return {
        ...bodyWithoutHeader,
        [header]: obj[header],
      } as Obj;
    }, obj);
}

/**
 * Creates a markdown table based on a headers object and an array of rows.
 * Columns are ordered in the order in which the header keys were created.
 *
 * @paramType A union of possible keys for headers and body
 * @example
 *   ```js
 *   const headers = {
 *     foo: "Foo header",
 *     bar: "Bar header",
 *   };
 *   const body = [
 *     { foo: "Foo body 1", bar: "Bar body 1" },
 *     { foo: "Foo body 2", bar: "Bar body 2" },
 *   ];
 *   render(<Table headers={headers} body={body} />)
 *   ===
 *   `
 *   | Foo header | Bar header |
 *   | ---------- | ---------- |
 *   | Foo body 1 | Bar body 1 |
 *   | Foo body 2 | Bar body 2 |
 *   `
 */
export function Table<Headers extends string>({
  /** An array of data objects with the same keys as the headers to be displayed as rows */
  body,
  /**
   * An object giving the headers for each column. The order in which the keys
   * of this object were created determines the order in which the columns
   * are rendered.
   */
  headers,
}: Props<Headers>): ReturnType<Component<Props<Headers>>> {
  const columnWidths = Object.values(headers).map((header) => {
    if (typeof header !== "string") {
      return 5;
    }
    return header.length;
  });

  const sortedBody = body.map(
    sortKeysInOrderOf(Object.keys(headers) as Headers[])
  );
  return (
    <Fragment>
      {"\n|"}
      {renderRow(headers)}
      {"\n|"}
      {renderSeparator(columnWidths)}
      {"\n|"}
      {intersperse(
        sortedBody.map((row) => renderRow(row)),
        "\n|"
      )}
      {"\n"}
    </Fragment>
  );
}
