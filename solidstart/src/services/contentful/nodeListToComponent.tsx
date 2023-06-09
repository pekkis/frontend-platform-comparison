import type { Mark } from "@contentful/rich-text-types";
import { helpers } from "@contentful/rich-text-types";
import type { CommonNode, Options } from "../contentful";
import { appendKeyToValidElement } from "./appendKeyToValidElement";
import type { JSXNode } from "@builder.io/qwik";

export function nodeListToReactComponents(
  nodes: CommonNode[],
  options: Options
): JSXNode {
  return nodes.map((node: CommonNode, index: number): JSXNode => {
    return nodeToReactComponent(node, options);
  });
}

export function nodeToReactComponent(
  node: CommonNode,
  options: NonNullable<Options>
): JSXNode {
  const { renderNode, renderMark, renderText } = options;

  if (helpers.isText(node)) {
    return <div>pierukakka</div>;
  }

  const children: JSXNode = nodeListToReactComponents(node.content, options);

  return <>{children}</>;

  return <div>pieru</div>;

  if (helpers.isText(node)) {
    return node.marks.reduce(
      (value: JSXNode, mark: Mark): JSXNode => {
        if (!renderMark[mark.type]) {
          return value;
        }
        return renderMark[mark.type](value);
      },
      renderText ? renderText(node.value) : node.value
    );
  } else {
    const children: JSXNode = nodeListToReactComponents(node.content, options);
    if (!node.nodeType || !renderNode[node.nodeType]) {
      return <>{children}</>;
    }
    return renderNode[node.nodeType](node, children);
  }
}
