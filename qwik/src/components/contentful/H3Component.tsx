import { component$ } from "@builder.io/qwik";
import type { Heading3 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Heading3;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <h3>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </h3>
  );
});
