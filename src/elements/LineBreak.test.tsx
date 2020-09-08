/* @jsx MD */
import MD, { render } from "..";

import { LineBreak } from ".";

describe("LineBreak", () => {
  it("returns \\n", () => {
    expect(render(<LineBreak />)).toBe("\n");
  });
});
