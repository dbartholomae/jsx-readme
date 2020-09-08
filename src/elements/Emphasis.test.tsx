/* @jsx MD */
import MD, { render } from "..";

import { Emphasis } from ".";

describe("Emphasis", () => {
  it("returns the wrapped content", () => {
    expect(render(<Emphasis>Test</Emphasis>)).toBe("_Test_");
  });

  it("strongly returns the wrapped content", () => {
    expect(render(<Emphasis strong>Test</Emphasis>)).toBe("**Test**");
  });
});
