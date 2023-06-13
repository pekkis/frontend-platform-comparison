import type { TableRow } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: TableRow;
  renderers: RendererMap;
  context: any;
};

const TableRowComponent: FC<Props> = ({ node, renderers, context }) => {
  return (
    <tr>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </tr>
  );
};

export default TableRowComponent;
