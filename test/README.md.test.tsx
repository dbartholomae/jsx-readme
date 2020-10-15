import { promises as fs } from "fs";
import { runTypeScriptFile } from "./utils/runTypeScriptFile";

describe("README creation script", () => {
  it("creates the README file of the repo", async () => {
    const scriptPath = "./examples/README.md.tsx";
    await runTypeScriptFile(scriptPath);

    const expectedFile = await fs.readFile("./test/README.expected.md", {
      encoding: "utf8",
    });
    const actualFile = await fs.readFile("./README.md", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  }, 20000);
});
