import * as fs from "fs";
import "../examples/README.md.tsx";

describe("README creation script", () => {
  it("creates the README file of the repo", async () => {
    const expectedFile = fs.readFileSync("./test/README.expected.md", {
      encoding: "utf8",
    });
    const actualFile = fs.readFileSync("./test/README.md", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  });
});
