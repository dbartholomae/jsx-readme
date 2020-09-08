/* @jsx MD */
import MD, { render } from "..";

import { Strikethrough } from ".";

describe("Strikethrough", () => {
  it("renders to the children wrapped in ~~", () => {
    expect(render(<Strikethrough>Test</Strikethrough>)).toBe("~~Test~~");
  });
});
