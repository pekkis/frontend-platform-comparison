import type { TableCell } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: TableCell;
  renderers: RendererMap;
  context: any;
};

const TableCellComponent: FC<Props> = ({ node, renderers, context }) => {
  return (
    <td>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </td>
  );
};

export default TableCellComponent;
