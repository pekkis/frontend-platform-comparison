import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Hyperlink } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Hyperlink;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers, context }) => {
  return (
    <Link href={node.data.uri}>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </Link>
  );
});
