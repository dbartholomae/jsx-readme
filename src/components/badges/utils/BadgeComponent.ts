/**
 * @packageDocumentation
 * @internal
 */

import { Component } from "jsx-md";
import { PackageJSON } from "../../../PackageJSON";

export interface BadgeProps {
  pkg: Readonly<PackageJSON>;
}

export type BadgeComponent = Component<Readonly<BadgeProps>>;
