import { component$ } from "@builder.io/qwik";
import type { Node } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";
import NodeComponent from "./NodeComponent";

type Props = {
  nodes: Node[];
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ nodes, renderers, context }) => {
  return (
    <>
      {nodes.map((content, i) => {
        return (
          <NodeComponent
            key={i}
            node={content}
            renderers={renderers}
            context={context}
          />
        );
      })}
    </>
  );
});
