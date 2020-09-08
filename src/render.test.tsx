/* @jsx createElement */
import { createElement } from "./createElement";
import { Component, Text } from ".";
import { render } from "./render";

describe("render", () => {
  it("throws an error when rendering an invalid element", () => {
    expect(() =>
      render({
        // @ts-expect-error - invalid element type is not assignable
        type: "invalid element type",
        key: null,
        props: {},
      })
    ).toThrowError();
  });

  it("throws an error if a lower-case component is used", () => {
    // @ts-expect-error - lower-case element test does not exist
    expect(() => render(<test>Test</test>)).toThrowError(
      "Unsupported lower-case element 'test' encountered, please make sure all your components start with an upper-case letter and are functions."
    );
  });

  it("renders a nested component to its content", () => {
    expect(render(<Text>Content</Text>)).toBe("Content");
  });

  it("renders a functional component to its content", () => {
    const TestComponent: Component = () => <Text>Content</Text>;

    expect(render(<TestComponent />)).toBe("Content");
  });

  it("renders a functional component with an attribute", () => {
    type Props = { attribute: string };
    const TestComponent: Component<Props> = ({ attribute }) => (
      <Text>{attribute}</Text>
    );
    expect(render(<TestComponent attribute="Test" />)).toBe("Test");
  });
});
