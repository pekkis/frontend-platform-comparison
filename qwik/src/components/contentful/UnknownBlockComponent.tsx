import { component$, useSignal } from "@builder.io/qwik";
import type { Node } from "@contentful/rich-text-types";
import { RendererMap } from "./RichTextDocument";

const UnknownBlockComponent = component$(
  ({ node }: { node: Node; renderers: RendererMap; context: any }) => {
    const isOpen = useSignal(false);

    return (
      <div
        style={{
          border: "2px solid rgb(0 0 0)",
          padding: "1em",
          cursor: "pointer"
        }}
        onClick$={() => {
          isOpen.value = !isOpen.value;
        }}
      >
        node type: '{node.nodeType}'
        {isOpen.value && (
          <div>
            <pre>{JSON.stringify(node, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
);

export default UnknownBlockComponent;
