import { component$ } from "@builder.io/qwik";
import type { Heading6 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Heading6;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <tr>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </tr>
  );
});
