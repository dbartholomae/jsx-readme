/**
 * @packageDocumentation
 * @internal
 */
import {
  Component,
  MarkdownElement,
  MarkdownNode,
  MdFragmentType,
} from "./model";

export function createElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownNode[]
): MarkdownNode | MarkdownNode[];
export function createElement(
  nodeType: string,
  attributes: null,
  ...children: MarkdownNode[]
): MarkdownNode | MarkdownNode[];
export function createElement(
  typeOrComponent: string | Component,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownNode[]
): MarkdownElement {
  if (typeOrComponent === MdFragmentType) {
    return createFragmentElement(children);
  }

  if (typeof typeOrComponent === "function") {
    return createComponentElement(typeOrComponent, attributes, children);
  }

  throw new TypeError(
    `Unsupported lower-case element '${typeOrComponent}' encountered, please make sure all your components start with an upper-case letter and are functions.`
  );
}

function createFragmentElement(children: MarkdownNode[]): MarkdownElement {
  return {
    props: {
      children: children.flat(),
    },
    key: null,
    type: MdFragmentType,
  };
}

function createComponentElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  children: MarkdownNode[]
): MarkdownElement {
  return {
    type: component,
    props: {
      ...(attributes ?? {}),
      children: children.length <= 1 ? children[0] : children,
    },
    key: null,
  };
}
