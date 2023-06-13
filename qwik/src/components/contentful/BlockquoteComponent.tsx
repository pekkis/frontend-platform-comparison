import { component$ } from "@builder.io/qwik";
import type { Block } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Block;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <blockquote>
      {node.content.map((content, i) => {
        const Component =
          renderers.node[content.nodeType] || renderers.fallback;
        return (
          <Component
            key={i}
            node={content}
            renderers={renderers}
            context={context}
          />
        );
      })}
    </blockquote>
  );
});
