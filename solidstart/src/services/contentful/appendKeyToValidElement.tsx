import { JSXNode } from "@builder.io/qwik";

export function appendKeyToValidElement(
  element: JSXNode,
  key: number
): JSXNode {
  if (element.key === null) {
    return cloneElement(element, { key });
  }
  return element;
}
