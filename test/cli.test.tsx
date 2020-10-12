import * as fs from "fs";
import { runCli } from "./utils/runCli";

describe("cli README creation script", () => {
  it("creates the README.md.tsx file of the repo", async () => {
    const scriptPath = "./src/cli.ts";
    await runCli(scriptPath);

    const expectedFile = fs.readFileSync("./test/README.expected.tsx", {
      encoding: "utf8",
    });
    const actualFile = fs.readFileSync("./README.md.tsx", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  }, 20000);
});
