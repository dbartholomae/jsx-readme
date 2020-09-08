/* @jsx MD */
import MD, { render } from "..";

import { Heading } from ".";

describe("Heading", () => {
  it("renders a level 1 heading correctly", () => {
    expect(render(<Heading level={1}>Test</Heading>)).toBe("# Test\n\n");
  });

  it("renders a level 2 heading correctly", () => {
    expect(render(<Heading level={2}>Test</Heading>)).toBe("## Test\n\n");
  });

  it("renders a level 3 heading correctly", () => {
    expect(render(<Heading level={3}>Test</Heading>)).toBe("### Test\n\n");
  });
});
