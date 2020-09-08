/* @jsx MD */
import MD, { render } from "..";

import { InlineCode } from ".";

describe("InlineCode", () => {
  it("renders the content in ``", () => {
    expect(render(<InlineCode>Test</InlineCode>)).toBe("`Test`");
  });
});
