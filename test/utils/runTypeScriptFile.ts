import child_process from "child_process";

export async function runTypeScriptFile(scriptPath: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    child_process.exec(
      `node -r @swc-node/register ${scriptPath}`,
      (error, _stdout, stderr) => {
        if (error) {
          return reject(stderr);
        }
        resolve();
      });
  });
}
