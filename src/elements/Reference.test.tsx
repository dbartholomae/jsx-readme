/* @jsx MD */
import MD, { render } from "..";

import { Reference } from ".";

describe("Reference", () => {
  it("renders to a markdown reference", () => {
    expect(render(<Reference label="1">https://example.com</Reference>)).toBe(
      "\n[1]: https://example.com\n"
    );
  });

  it("renders to a markdown reference with title", () => {
    expect(
      render(
        <Reference label="1" title="Title">
          https://example.com
        </Reference>
      )
    ).toBe('\n[1]: https://example.com "Title"\n');
  });
});
