import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";
import { BadgeComponentOptions } from "./utils/BadgeComponent";
import { GithubWorkflowBadge } from "./GithubWorkflowBadge";
import { NeverFallback } from "./utils/NeverFallback";
import { CodecovBadge } from "./CodecovBadge";

export {
  GithubIssuesBadge,
  JsxReadmeBadge,
  NpmVersionBadge,
  NpmDownloadsBadge,
  GithubWorkflowBadge,
  CodecovBadge,
};

export const badges = {
  npmVersion: NpmVersionBadge,
  npmDownloads: NpmDownloadsBadge,
  githubIssues: GithubIssuesBadge,
  githubWorkflow: GithubWorkflowBadge,
  codecov: CodecovBadge,
  jsxReadme: JsxReadmeBadge,
} as const;

type Badges = typeof badges;
export type BadgeName = keyof Badges;
export const badgeNames = Object.keys(badges) as BadgeName[];

export const defaultBadges: Record<BadgeName, boolean> = {
  npmVersion: true,
  npmDownloads: true,
  githubIssues: true,
  githubWorkflow: false,
  codecov: false,
  jsxReadme: true,
} as const;

export type BadgeOptions = {
  [badgeName in BadgeName]: NeverFallback<
    BadgeComponentOptions<Badges[badgeName]>,
    boolean
  >;
};
