import { type Paragraph } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: Paragraph;
  renderers: RendererMap;
  context: any;
};

const Paragraph: FC<Props> = ({ node, renderers, context }) => {
  return (
    <p>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </p>
  );
};

export default Paragraph;
