/* @jsx MD */
import MD, { render } from "jsx-md";
import { SetupInstructions } from "./SetupInstructions";

describe("SetupInstructions", () => {
  it("renders the setup intructions section with default title", async () => {
    expect(
      await render(<SetupInstructions />)
    ).toBe(
      '## Set up instructions\n\n'
    )
  })

  it("renders the setup intructions section with custom title", async () => {
    expect(
      await render(<SetupInstructions title={"Custom Set up Instructions"}/>)
    ).toBe(
      '## Custom Set up Instructions\n\n'
    )
  })
});
