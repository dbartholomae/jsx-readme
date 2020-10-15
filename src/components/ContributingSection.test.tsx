/* @jsx MD */
import MD, { render } from "jsx-md";

import { ContributingSection } from ".";

describe("ContributingSection", () => {
  it("renders a 'Contributing' heading", () => {
    expect(render(<ContributingSection />)).toContain("## 🖋️ Contributing\n");
  });

  it("renders sentence with a link to the contributing file", () => {
    expect(render(<ContributingSection />)).toContain(
      "If you are interested in contributing to this repository, please read up on the details in our [contributing guidelines](./CONTRIBUTING.md).\n"
    );
  });

  it("renders sentence with a custom link to the contributing file", () => {
    expect(
      render(
        <ContributingSection contributingFilePath="./docs/CONTRIBUTING.md" />
      )
    ).toContain(
      "If you are interested in contributing to this repository, please read up on the details in our [contributing guidelines](./docs/CONTRIBUTING.md).\n"
    );
  });
});
