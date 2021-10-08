/**
 * @packageDocumentation
 * @internal
 */
export interface PackageJSON {
  description?: string;
  devDependencies?: Record<string, unknown>;
  directories?: {
    example?: string;
  };
  funding?: string | Funding | Array<string | Funding>;
  homepage?: string;
  license?: string;
  name: string;
  private?: boolean;
  repository?: string | Repository;
}

export interface Funding {
  type: string;
  url: string;
}

export interface Repository {
  type: string;
  url: string;
  directory?: string;
}
