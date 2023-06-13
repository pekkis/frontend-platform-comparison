import { component$, useSignal } from "@builder.io/qwik";
import type { Node } from "@contentful/rich-text-types";

const UnknownInlineComponent = component$(({ node }: { node: Node }) => {
  const isOpen = useSignal(false);

  return (
    <span
      style={{
        display: "inline-block",
        border: "2px solid rgb(0 0 0)",
        padding: ".33em",
        cursor: "pointer"
      }}
      onClick$={() => {
        isOpen.value = !isOpen.value;
      }}
    >
      node type: '{node.nodeType}'
      {isOpen.value && <span>{JSON.stringify(node, null, 2)}</span>}
    </span>
  );
});

export default UnknownInlineComponent;
