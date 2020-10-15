/* @jsx Md */
import Md, { Fragment } from "jsx-md";
import mockFs from "mock-fs";
import { promises as fs } from "fs";
import { renderToFile } from "./renderToFile";

describe("renderToFile", () => {
  beforeEach(() => {
    mockFs({});
  });

  afterEach(() => {
    mockFs.restore();
  });

  it("renders a component to a file", async () => {
    const filename = "README.md";
    await renderToFile(filename, <Fragment>Content</Fragment>);
    const actualFile = await fs.readFile(filename, { encoding: "utf-8" });
    expect(actualFile).toBe("Content");
  });

  it("rejects if trying to write to a non-existing folder", async () => {
    const filename = "non-existing-folder/README.md";
    await expect(
      renderToFile(filename, <Fragment>Content</Fragment>)
    ).rejects.toBeDefined();
  });
});
