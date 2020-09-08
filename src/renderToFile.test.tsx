/* @jsx Md */
import Md, { Fragment } from "jsx-md";
import mockFs from "mock-fs";
import * as fs from "fs";
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
    const actualFile = fs.readFileSync(filename, { encoding: "utf-8" });
    expect(actualFile).toBe("Content");
  });
});
