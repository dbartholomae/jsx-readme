/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { GithubWorkflowBadge } from "./GithubWorkflowBadge";

describe("GithubWorkflowBadge", () => {
  it("shows a github-workflow badge if repository is in npm shortform", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const workflowName = "Build and deploy";

    expect(
      await render(
        <GithubWorkflowBadge pkg={pkg} workflowName={workflowName} />
      )
    ).toContain(
      await render(
        <Badge
          imageSource="https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=main"
          link='https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy"'
        >
          build status
        </Badge>
      )
    );
  });

  it("shows a github-workflow badge with a non-default branch", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    const branch = "master";
    const workflowName = "Build and deploy";

    expect(
      await render(
        <GithubWorkflowBadge
          pkg={pkg}
          branch={branch}
          workflowName={workflowName}
        />
      )
    ).toContain(
      await render(
        <Badge
          imageSource="https://github.com/dbartholomae/jsx-readme/workflows/Build%20and%20deploy/badge.svg?branch=master"
          link='https://github.com/dbartholomae/jsx-readme/actions?query=workflow%3A"Build%20and%20deploy"'
        >
          build status
        </Badge>
      )
    );
  });

  it("shows nothing if there is no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    const workflowName = "Build and deploy";

    expect(
      await render(
        <GithubWorkflowBadge pkg={pkg} workflowName={workflowName} />
      )
    ).toBe("");
  });

  it("shows nothing if the repository is a bitbucket repo", async () => {
    const pkg = {
      name: "package-name",
      repository: "bitbucket:user/repo",
    };

    const workflowName = "Build and deploy";

    expect(
      await render(
        <GithubWorkflowBadge pkg={pkg} workflowName={workflowName} />
      )
    ).toBe("");
  });
});
