import type { Node } from "@contentful/rich-text-types";
import { FC } from "react";
import Opener from "./Opener";

type Props = {
  node: Node;
};

const UnknownInlineComponent: FC<Props> = ({ node }) => {
  return (
    <span
      style={{
        display: "inline-block",
        border: "2px solid rgb(0 0 0)",
        padding: ".33em",
        cursor: "pointer"
      }}
    >
      node type: &quot;{node.nodeType}&quot;
      <Opener>{JSON.stringify(node)}</Opener>
    </span>
  );
};

export default UnknownInlineComponent;
