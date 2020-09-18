import { Component } from "jsx-md";
import { PackageJSON } from "../../../PackageJSON";

export interface BadgeProps {
  pkg: Readonly<PackageJSON>;
}

export interface BadgePropsWithOptions<Options> {
  options: Options;
  pkg: Readonly<PackageJSON>;
}

export type BadgeComponent<Options = never> = Component<
  Readonly<
    [Options] extends [never] ? BadgeProps : BadgePropsWithOptions<Options>
  >
>;

export type BadgeComponentOptions<Badge> = Badge extends BadgeComponent<
  infer Options
>
  ? Options
  : never;
