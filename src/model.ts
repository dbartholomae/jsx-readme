/** @internal */
export const MdFragmentType = "mdFragment" as const;

/** @internal */
interface FunctionElement<Props = unknown> {
  type: Component<Props>;
  props: Props;
  key: string | number | null;
}

/** @internal */
interface MdFragmentElement {
  type: typeof MdFragmentType;
  props: PropsWithChildren;
  key: string | number | null;
}

/** Internal representation of markdown before rendering. */
export type MarkdownElement<Props = unknown> =
  | FunctionElement<Props>
  | MdFragmentElement;

/** Primitive text types that get converted into text. */
export type MarkdownText = string | number;

/** Nil types that get ignored. */
export type MarkdownNil = false | null | undefined;

/** Any primitive Markdown type. */
export type MarkdownNode = MarkdownNil | MarkdownText | MarkdownElement;

/** Nested Markdown type. */
export type MarkdownChildren = MarkdownNode | MarkdownChildren[];

/** Helper type for creating Elements that accept other markdown as children. */
export type PropsWithChildren<
  AdditionalProps extends unknown = unknown
> = AdditionalProps & {
  children?: MarkdownChildren;
};

/** A functional component that creates Markdown elements. */
export type Component<ComponentProps extends unknown = unknown> = (
  props: ComponentProps
) => MarkdownElement | null;
