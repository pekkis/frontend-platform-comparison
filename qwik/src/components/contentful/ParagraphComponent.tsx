import { component$ } from "@builder.io/qwik";
import { type Paragraph } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Paragraph;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <p>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </p>
  );
});
