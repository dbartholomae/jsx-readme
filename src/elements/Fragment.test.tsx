/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { render } from "..";

/* eslint-disable @typescript-eslint/no-unused-vars */
// It is used via @jsxFrag
import { Fragment } from ".";
/* eslint-enable @typescript-eslint/no-unused-vars */

describe("Fragment", () => {
  it("renders a single component", () => {
    expect(render(<>Test</>)).toEqual("Test");
  });
});
