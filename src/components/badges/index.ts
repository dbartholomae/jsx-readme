import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";

export const badges = {
  "github-issues": GithubIssuesBadge,
  "jsx-readme": JsxReadmeBadge,
  "npm-version": NpmVersionBadge,
  "npm-downloads": NpmDownloadsBadge,
} as const;

export { GithubIssuesBadge, JsxReadmeBadge, NpmVersionBadge };
