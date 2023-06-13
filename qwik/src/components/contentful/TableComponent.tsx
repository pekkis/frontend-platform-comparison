import { component$ } from "@builder.io/qwik";
import type { Table } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Table;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <table>
      <tbody>
        <NodeList
          nodes={node.content}
          renderers={renderers}
          context={context}
        />
      </tbody>
    </table>
  );
});
