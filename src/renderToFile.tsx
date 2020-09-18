import * as fs from "fs";
import type { MarkdownElement } from "jsx-md";
import { render } from "jsx-md";

/** Renders a markdown element into file. */
export async function renderToFile(
  path: string,
  element: MarkdownElement
): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, render(element), (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
