import child_process from "child_process";

export async function runTypeScriptFile(scriptPath: string): Promise<void> {
  const childProcess = child_process.exec(
    `./node_modules/.bin/ts-node ${scriptPath}`
  );
  await new Promise<void>((resolve, reject) => {
    childProcess.on("exit", (code) => {
      const SUCCESSFUL_EXIT_CODE = 0;
      if (code !== SUCCESSFUL_EXIT_CODE) {
        return reject("Fork failed");
      }
      resolve();
    });
  });
}
