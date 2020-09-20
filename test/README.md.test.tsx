import * as fs from "fs";
import { runTypeScriptFile } from "./utils/runTypeScriptFile";

describe("README creation script", () => {
  it("creates the README file of the repo", async () => {
    const scriptPath = "./examples/README.md.tsx";
    await runTypeScriptFile(scriptPath);

    const expectedFile = fs.readFileSync("./test/README.expected.md", {
      encoding: "utf8",
    });
    const actualFile = fs.readFileSync("./test/README.md", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  }, 20000);
});
