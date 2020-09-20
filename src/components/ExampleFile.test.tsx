/* @jsx Md */
import Md, { render } from "jsx-md";
import { ExampleFile } from "./ExampleFile";

describe("ExampleFile", () => {
  it("renders the content of an file in the examples folder defined in package.json", () => {
    expect(
      render(<ExampleFile fileName="example.json">{"{}"}</ExampleFile>)
    ).toContain("```json\n{}\n```");
  });

  it("renders the filename as heading for each example", () => {
    expect(
      render(<ExampleFile fileName="example.json">{"{}\n"}</ExampleFile>)
    ).toContain("### example.json\n");
  });

  it("trims ending new lines from the children", () => {
    expect(
      render(<ExampleFile fileName="example.json">{"{}\n"}</ExampleFile>)
    ).toContain("```json\n{}\n```");
  });
});
