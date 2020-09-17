import { GithubIssuesBadge } from "./GithubIssuesBadge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";
import { NpmVersionBadge } from "./NpmVersionBadge";

export const badges = {
  "github-issues": GithubIssuesBadge,
  "jsx-readme": JsxReadmeBadge,
  "npm-version": NpmVersionBadge,
} as const;

export { GithubIssuesBadge, JsxReadmeBadge, NpmVersionBadge };
