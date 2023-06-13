import type { Table } from "@contentful/rich-text-types";
import NodeList from "./NodeList";
import type { RendererMap } from "./RichTextDocument";
import { FC } from "react";

type Props = {
  node: Table;
  renderers: RendererMap;
  context: any;
};

const TableComponent: FC<Props> = ({ node, renderers, context }) => {
  return (
    <table>
      <tbody>
        <NodeList
          nodes={node.content}
          renderers={renderers}
          context={context}
        />
      </tbody>
    </table>
  );
};

export default TableComponent;
