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
  homepage?: string;
  license?: string;
  name: string;
  private?: boolean;
  repository?: string | Repository;
}

export interface Repository {
  type: string;
  url: string;
  directory?: string;
}
