import { component$ } from "@builder.io/qwik";
import type { Heading1 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Heading1;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <li>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </li>
  );
});
