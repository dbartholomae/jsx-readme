import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";
import { GithubWorkflowBadge } from "./GithubWorkflowBadge";
import { CodecovBadge } from "./CodecovBadge";

export {
  GithubIssuesBadge,
  JsxReadmeBadge,
  NpmVersionBadge,
  NpmDownloadsBadge,
  GithubWorkflowBadge,
  CodecovBadge,
};

export const badgeComponents = {
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
  githubIssues: GithubIssuesBadge,
  jsxReadme: JsxReadmeBadge,
} as const;

export type BadgeName = keyof typeof badgeComponents;
