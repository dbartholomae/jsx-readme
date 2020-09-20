/* @jsx Md */
import Md, { render } from "jsx-md";
import { CodeFile } from "./CodeFile";

describe("CodeFile", () => {
  it("renders the content of an file in the examples folder defined in package.json", () => {
    expect(
      render(<CodeFile fileName="example.json">{"{}"}</CodeFile>)
    ).toContain("```json\n{}\n```");
  });

  it("renders the filename as heading for each example", () => {
    expect(
      render(<CodeFile fileName="example.json">{"{}\n"}</CodeFile>)
    ).toContain("### example.json\n");
  });

  it("trims ending new lines from the children", () => {
    expect(
      render(<CodeFile fileName="example.json">{"{}\n"}</CodeFile>)
    ).toContain("```json\n{}\n```");
  });

  it("replaces findStr with replaceStr", () => {
    const replacements = [{ find: /\{\}/g, replace: "replacements" }];
    expect(
      render(
        <CodeFile fileName="example.json" replacements={replacements}>
          {"{}\n"}
        </CodeFile>
      )
    ).toContain("```json\nreplacements\n```");
  });
});
