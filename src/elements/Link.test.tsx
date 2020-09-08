/* @jsx MD */
import MD, { render } from "..";

import { Link } from ".";

describe("Link", () => {
  it("renders to a markdown link without title", () => {
    expect(render(<Link to="https://example.com">Test</Link>)).toBe(
      "[Test](https://example.com)"
    );
  });

  it("renders to a markdown link with title", () => {
    expect(
      render(
        <Link to="https://example.com" title="Title">
          Test
        </Link>
      )
    ).toBe('[Test](https://example.com "Title")');
  });
});
