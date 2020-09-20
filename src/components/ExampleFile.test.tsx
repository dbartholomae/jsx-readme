/* @jsx Md */
import Md, { render } from "jsx-md";
import { ExampleFile } from "./ExampleFile";

describe("ExampleFile", () => {
  it("trims ending new lines from the children", () => {
    expect(
      render(
        <ExampleFile fileName="example.json" language="json">
          {"{}\n"}
        </ExampleFile>
      )
    ).toContain("```json\n{}\n```");
  });
});
