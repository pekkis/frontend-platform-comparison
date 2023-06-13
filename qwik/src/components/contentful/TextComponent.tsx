import type { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { MARKS } from "@contentful/rich-text-types";
import { type Text } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Text;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(({ node, renderers }) => {
  return (
    <>
      {node.marks.reduce((a: JSXNode | string, m, i) => {
        const Component = renderers.mark[m.type as MARKS];
        return (
          <Component key={i} mark={m}>
            {a}
          </Component>
        );
      }, node.value)}
    </>
  );
});
