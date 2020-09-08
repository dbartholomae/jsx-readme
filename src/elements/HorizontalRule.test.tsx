/* @jsx MD */
import MD, { render } from "..";

import { HorizontalRule } from ".";

describe("Horizontal Rule", () => {
  it("returns --- with empty lines", () => {
    expect(render(<HorizontalRule />)).toBe("\n---\n");
  });
});
