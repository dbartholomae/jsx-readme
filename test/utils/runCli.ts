import child_process from "child_process";

export async function runCli(scriptPath: string): Promise<void> {
  const childProcess = child_process.exec(`ts-node ${scriptPath} init ./test/`);
  await new Promise((resolve, reject) => {
    childProcess.on("exit", (code) => {
      const SUCCESSFUL_EXIT_CODE = 0;
      if (code !== SUCCESSFUL_EXIT_CODE) {
        return reject("Fork failed");
      }
      resolve();
    });
  });
}
