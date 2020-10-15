import * as fs from "fs";
import type { MarkdownElement } from "jsx-md";
import { render } from "jsx-md";

/** Renders a markdown element into file. */
export async function renderToFile(
  path: string,
  element: MarkdownElement
): Promise<void> {
  const renderedElement = await render(element);
  return new Promise((resolve, reject) => {
    fs.writeFile(path, renderedElement, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
