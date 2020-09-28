/**
 * @packageDocumentation
 * @internal
 */

import { Component } from "jsx-md";
import { PackageJSON } from "../../../PackageJSON";

export interface BadgeProps {
  pkg: Readonly<PackageJSON>;
  inviteLink: string;
  serverId: string;
}

export type BadgeComponent = Component<Readonly<BadgeProps>>;
