import { intersperse } from "./intersperse";

describe("intersperse", () => {
  it("adds an element between all elements of an array", () => {
    expect(intersperse(["foo", "bar", "baz"], "a")).toEqual([
      "foo",
      "a",
      "bar",
      "a",
      "baz",
    ]);
  });
});
