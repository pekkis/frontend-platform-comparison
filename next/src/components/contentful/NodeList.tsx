import type { Node } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";
import NodeComponent from "./NodeComponent";
import { FC } from "react";

type Props = {
  nodes: Node[];
  renderers: RendererMap;
  context: any;
};

const NodeList: FC<Props> = ({ nodes, renderers, context }) => {
  return (
    <>
      {nodes.map((content, i) => {
        return (
          <NodeComponent
            key={i}
            node={content}
            renderers={renderers}
            context={context}
          />
        );
      })}
    </>
  );
};

export default NodeList;
