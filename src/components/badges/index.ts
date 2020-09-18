import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";
import { BadgeComponentOptions } from "./utils/BadgeComponent";
import { GithubWorkflowBadge } from "./GithubWorkflowBadge";
import { NeverFallback } from "./utils/NeverFallback";
import { CodecovBadge } from "./CodecovBadge";

export { GithubIssuesBadge, JsxReadmeBadge, NpmVersionBadge };

export const badges = {
  codecov: CodecovBadge,
  githubIssues: GithubIssuesBadge,
  githubWorkflow: GithubWorkflowBadge,
  jsxReadme: JsxReadmeBadge,
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
} as const;

type Badges = typeof badges;
export type BadgeName = keyof Badges;
export const badgeNames = Object.keys(badges) as BadgeName[];

export const defaultBadges: Record<BadgeName, boolean> = {
  codecov: false,
  githubIssues: true,
  githubWorkflow: false,
  jsxReadme: true,
  npmDownloads: true,
  npmVersion: true,
} as const;

export type BadgeOptions = {
  [badgeName in BadgeName]: NeverFallback<
    BadgeComponentOptions<Badges[badgeName]>,
    boolean
  >;
};
