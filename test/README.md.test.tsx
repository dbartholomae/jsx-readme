import * as fs from "fs";
import * as child_process from "child_process";

describe("README creation script", () => {
  it("creates the README file of the repo", async () => {
    const childProcess = child_process.exec("ts-node ./examples/README.md.tsx");
    await new Promise((resolve, reject) => {
      childProcess.on("exit", (code) => {
        if (code !== 0) {
          return reject("Fork failed");
        }
        resolve();
      });
    });

    const expectedFile = fs.readFileSync("./test/README.expected.md", {
      encoding: "utf8",
    });
    const actualFile = fs.readFileSync("./test/README.md", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  }, 10000);
});
