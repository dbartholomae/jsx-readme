/* @jsx MD */
import MD, { render } from "jsx-md";
import { CLAAssistantBadge } from ".";
import { Badge } from "../Badge";

describe("CLAAssistantBadge", () => {
  it("shows a CLA Assistant Badge badge if repository is in npm shortform", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(render(<CLAAssistantBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://cla-assistant.io/readme/badge/dbartholomae/jsx-readme"
          link="https://cla-assistant.io/dbartholomae/jsx-readme"
        >
          CLA Assistant
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    expect(render(<CLAAssistantBadge pkg={pkg} />)).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    expect(render(<CLAAssistantBadge pkg={pkg} />)).toBe("");
  });
});
