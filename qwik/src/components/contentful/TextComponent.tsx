import type { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { type Text } from "@contentful/rich-text-types";
import MarkComponent from "./MarkComponent";

type Props = {
  node: Text;
};

export default component$<Props>(({ node }) => {
  return (
    <>
      {node.marks.reduce((a: JSXNode | string, m, i) => {
        return (
          <MarkComponent key={i} mark={m}>
            {a}
          </MarkComponent>
        );
      }, node.value)}
    </>
  );
});
