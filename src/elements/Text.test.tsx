/* @jsx MD */
import MD, { render } from "..";

import { Text } from ".";

describe("Text", () => {
  it("renders to the children", () => {
    expect(render(<Text>Test</Text>)).toBe("Test");
  });

  it("renders correctly with some children being null", () => {
    expect(render(<Text>Test{null}</Text>)).toBe("Test");
  });

  it("escapes multiple instances in the same string", () => {
    expect(render(<Text>(Parantheses in [parantheses])</Text>)).toBe(
      "\\(Parantheses in \\[parantheses\\]\\)"
    );
  });

  it.each([
    "\\",
    "`",
    "*",
    "_",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    "#",
    "+",
    "-",
    ".",
    "!",
  ])("escapes %s", (char: string) => {
    expect(render(<Text>{char}</Text>)).toBe(`\\${char}`);
  });

  it.each([
    "\\",
    "`",
    "*",
    "_",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    "#",
    "+",
    "-",
    ".",
    "!",
  ])("escapes two elements of %s", (char: string) => {
    expect(
      render(
        <Text>
          {char}
          {char}
        </Text>
      )
    ).toBe(`\\${char}\\${char}`);
  });
});
