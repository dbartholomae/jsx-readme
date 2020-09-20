/* @jsx Md */
import Md, { render } from "jsx-md";
import { ExamplesFromPkg } from "./ExamplesFromPkg";
import mockFs from "mock-fs";

describe("ExamplesFromPkg", () => {
  describe("with an examples directory with a json file", () => {
    const pkg = {
      name: "test-package",
      directories: {
        example: "examples",
      },
    };

    beforeEach(() => {
      mockFs({
        examples: {
          "example.json": "{}",
        },
      });
    });

    afterEach(() => {
      mockFs.restore();
    });

    it("renders an 'Examples' heading", () => {
      expect(render(<ExamplesFromPkg pkg={pkg} />)).toContain("## Examples\n");
    });

    it("renders the content of an file in the examples folder defined in package.json", () => {
      expect(render(<ExamplesFromPkg pkg={pkg} />)).toContain(
        "```json\n{}\n```"
      );
    });
  });
});
