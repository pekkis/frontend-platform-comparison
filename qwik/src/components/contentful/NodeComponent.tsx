import { component$ } from "@builder.io/qwik";
import { type Node } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Node;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  const Component = renderers.node[node.nodeType] || renderers.fallback;
  return <Component node={node} renderers={renderers} context={context} />;
});
