/* @jsx Md */
import Md, { render } from "jsx-md";
import { CodeFile } from "./CodeFile";

describe("CodeFile", () => {
  it("renders the content of an file in the examples folder defined in package.json", async () => {
    expect(
      await render(<CodeFile fileName="example.json">{"{}"}</CodeFile>)
    ).toContain("```json\n{}\n```");
  });

  it("renders the filename as heading for each example", async () => {
    expect(
      await render(<CodeFile fileName="example.json">{"{}\n"}</CodeFile>)
    ).toContain("### example.json\n");
  });

  it("trims ending new lines from the children", async () => {
    expect(
      await render(<CodeFile fileName="example.json">{"{}\n"}</CodeFile>)
    ).toContain("```json\n{}\n```");
  });

  it("replaces findStr with replaceStr", async () => {
    const replacements = [{ find: /\{\}/g, replace: "replacements" }];
    expect(
      await render(
        <CodeFile fileName="example.json" replacements={replacements}>
          {"{}\n"}
        </CodeFile>
      )
    ).toContain("```json\nreplacements\n```");
  });
});
