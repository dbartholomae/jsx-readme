export interface PackageJSON {
  description?: string;
  homepage?: string;
  name: string;
  private?: boolean;
  repository?: string | Repository;
}

export interface Repository {
  type: string;
  url: string;
  directory?: string;
}
