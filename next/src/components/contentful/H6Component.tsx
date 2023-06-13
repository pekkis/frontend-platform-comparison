import type { Heading6 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: Heading6;
  renderers: RendererMap;
  context: any;
};

const H6Component: FC<Props> = ({ node, renderers, context }) => {
  return (
    <h6>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </h6>
  );
};

export default H6Component;
