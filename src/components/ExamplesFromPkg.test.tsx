/* @jsx Md */
import Md, { render } from "jsx-md";
import { ExamplesFromPkg } from "./ExamplesFromPkg";
import mockFs from "mock-fs";
import { CodeFile } from "./CodeFile";

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

    it("renders the example.json file as an ExampleFile", () => {
      expect(render(<ExamplesFromPkg pkg={pkg} />)).toContain(
        render(<CodeFile fileName="example.json">{"{}"}</CodeFile>)
      );
    });

    it("with latin1 encoding it renders the example.json file as an ExampleFile", () => {
      expect(render(<ExamplesFromPkg pkg={pkg} encoding="latin1" />)).toContain(
        render(<CodeFile fileName="example.json">{"{}"}</CodeFile>)
      );
    });

    it("replaces .. imports by imports to the package name", () => {
      mockFs({
        examples: {
          "example.ts": 'import something from "..";',
        },
      });

      expect(
        render(<ExamplesFromPkg pkg={{ ...pkg, name: "test-package" }} />)
      ).toContain('import something from "test-package";');
    });

    it("does not replace .. imports if replacePackageImportsWithPackageName is false", () => {
      mockFs({
        examples: {
          "example.ts": 'import something from "..";',
        },
      });

      expect(
        render(
          <ExamplesFromPkg
            pkg={{
              ...pkg,
              name: "test-package",
            }}
            replacePackageImportsWithPackageName={false}
          />
        )
      ).toContain('import something from "..";');
    });
  });

  it("renders nothing if directories is not defined", () => {
    const pkg = {
      name: "test-package",
      directories: undefined,
    };
    expect(render(<ExamplesFromPkg pkg={pkg} />)).toBe("");
  });

  it("renders nothing if example directory is not defined", () => {
    const pkg = {
      name: "test-package",
      directories: {
        example: undefined,
      },
    };
    expect(render(<ExamplesFromPkg pkg={pkg} />)).toBe("");
  });
});
