import type { Heading2 } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: Heading2;
  renderers: RendererMap;
  context: any;
};

const H2Component: FC<Props> = ({ node, renderers, context }) => {
  return (
    <h2>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </h2>
  );
};

export default H2Component;
