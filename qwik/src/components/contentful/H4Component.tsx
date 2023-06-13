import { component$ } from "@builder.io/qwik";
import type { Heading4 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Heading4;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <h4>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </h4>
  );
});
