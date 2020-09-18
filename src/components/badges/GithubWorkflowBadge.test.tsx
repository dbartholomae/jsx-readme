/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { GithubWorkflowBadge } from "./GithubWorkflowBadge";

describe("GithubWorkflowBadge", () => {
  it("shows a github-workflow badge if repository is in npm shortform", () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const options = {
      workflowName: "Build and deploy",
    };

    expect(
      render(<GithubWorkflowBadge pkg={pkg} options={options} />)
    ).toContain(
      render(
        <Badge
          imageSource="https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main"
          link='https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy"'
        >
          build status
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", () => {
    const pkg = {
      name: "package-name",
    };

    const options = {
      workflowName: "Build and deploy",
    };

    expect(render(<GithubWorkflowBadge pkg={pkg} options={options} />)).toBe(
      ""
    );
  });

  it("shows nothing if the repository is a bitbucket repo", () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    const options = {
      workflowName: "Build and deploy",
    };

    expect(render(<GithubWorkflowBadge pkg={pkg} options={options} />)).toBe(
      ""
    );
  });
});
