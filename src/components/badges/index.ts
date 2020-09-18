import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";

export { GithubIssuesBadge, JsxReadmeBadge, NpmVersionBadge };

export const badges = {
  githubIssues: GithubIssuesBadge,
  jsxReadme: JsxReadmeBadge,
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
} as const;

export const defaultBadges = {
  githubIssues: true,
  jsxReadme: true,
  npmDownloads: true,
  npmVersion: true,
} as const;
