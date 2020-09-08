/**
 * @packageDocumentation
 * @internal
 */
export function intersperse<Element, Separator>(
  array: Element[],
  separator: Separator
): (Element | Separator)[] {
  return array.flatMap((element) => [separator, element]).slice(1);
}
