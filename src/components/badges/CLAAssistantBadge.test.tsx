/* @jsx MD */
import MD, { render } from "jsx-md";
import { CLAAssistantBadge } from ".";
import { Badge } from "../Badge";

describe("CLAAssistantBadge", () => {
  it("shows a CLA Assistant Badge badge if repository is in npm shortform", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<CLAAssistantBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="https://cla-assistant.io/readme/badge/dbartholomae/jsx-readme"
          link="https://cla-assistant.io/dbartholomae/jsx-readme"
        >
          CLA Assistant
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<CLAAssistantBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(await render(<CLAAssistantBadge pkg={pkg} />)).toBe("");
  });
});
