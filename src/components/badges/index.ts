import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";

export const badges = {
  githubIssues: GithubIssuesBadge,
  jsxReadme: JsxReadmeBadge,
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
} as const;

export { GithubIssuesBadge, JsxReadmeBadge, NpmVersionBadge };
