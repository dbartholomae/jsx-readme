import child_process from "child_process";

export async function runTypeScriptFile(scriptPath: string): Promise<void> {
  const childProcess = child_process.exec(`ts-node ${scriptPath}`);
  await new Promise((resolve, reject) => {
    childProcess.on("exit", (code) => {
      const SUCCESSFUL_EXIT_CODE = 1;
      if (code !== SUCCESSFUL_EXIT_CODE) {
        return reject("Fork failed");
      }
      resolve();
    });
  });
}
