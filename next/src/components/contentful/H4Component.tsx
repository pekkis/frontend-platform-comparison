import type { Heading4 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: Heading4;
  renderers: RendererMap;
  context: any;
};

const H4Component: FC<Props> = ({ node, renderers, context }) => {
  return (
    <h4>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </h4>
  );
};

export default H4Component;
