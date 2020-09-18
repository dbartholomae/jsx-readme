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

type BadgeName = keyof typeof badges;
export const badgeNames = Object.keys(badges) as BadgeName[];

export const defaultBadges: Record<BadgeName, boolean> = {
  githubIssues: true,
  jsxReadme: true,
  npmDownloads: true,
  npmVersion: true,
} as const;
