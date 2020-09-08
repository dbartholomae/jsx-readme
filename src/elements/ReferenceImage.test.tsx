/* @jsx MD */
import MD, { render } from "..";

import { ReferenceImage } from ".";

describe("ReferenceImage", () => {
  it("renders to a markdown image with reference", () => {
    expect(
      render(<ReferenceImage reference="logo">Alternative text</ReferenceImage>)
    ).toBe("![Alternative text][logo]");
  });
});
