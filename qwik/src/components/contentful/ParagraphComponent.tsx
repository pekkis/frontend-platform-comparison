import { component$ } from "@builder.io/qwik";
import { type Paragraph } from "@contentful/rich-text-types";
import TextComponent from "./TextComponent";
import InlineComponent from "./InlineComponent";

type Props = {
  node: Paragraph;
};

export default component$<Props>(({ node }) => {
  return (
    <p>
      {node.content.map((n, i) => {
        if (n.nodeType === "text") {
          return <TextComponent key={i} node={n} />;
        }

        return <InlineComponent key={i} node={n} />;
      })}
    </p>
  );
});
