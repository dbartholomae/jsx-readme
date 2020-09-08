/* @jsx MD */
import MD, { render } from "..";

import { ReferenceLink } from ".";

describe("ReferenceLink", () => {
  it("renders to a markdown link without reference", () => {
    expect(render(<ReferenceLink>Link text</ReferenceLink>)).toBe(
      "[Link text]"
    );
  });

  it("renders to a markdown link with reference", () => {
    expect(render(<ReferenceLink reference="1">Link text</ReferenceLink>)).toBe(
      "[Link text][1]"
    );
  });
});
