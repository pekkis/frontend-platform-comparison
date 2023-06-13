import type { Hyperlink } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: Hyperlink;
  renderers: RendererMap;
  context: any;
};

const HyperlinkComponent: FC<Props> = ({ node, renderers, context }) => {
  return (
    <a href={node.data.uri}>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </a>
  );
};

export default HyperlinkComponent;
