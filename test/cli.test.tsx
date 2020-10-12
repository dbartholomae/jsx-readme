import * as fs from "fs";
import { runTypeScriptFile } from "./utils/runTypeScriptFile";

describe("cli README creation script", () => {
  it("creates the README.md.tsx file of the repo", async () => {
    const scriptPath = "./src/cli.ts";
    await runTypeScriptFile(scriptPath);

    const expectedFile = fs.readFileSync("./test/README.expected.tsx", {
      encoding: "utf8",
    });
    const actualFile = fs.readFileSync("./README.md.tsx", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  }, 20000);
});
