import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Document, Mark } from "@contentful/rich-text-types";
import BlockquoteComponent from "@/components/contentful/BlockquoteComponent";
import H1Component from "@/components/contentful/H1Component";
import H2Component from "@/components/contentful/H2Component";
import H3Component from "@/components/contentful/H3Component";
import H4Component from "@/components/contentful/H4Component";
import H5Component from "@/components/contentful/H5Component";
import H6Component from "@/components/contentful/H6Component";
import HrComponent from "@/components/contentful/HrComponent";
import HyperlinkComponent from "@/components/contentful/HyperlinkComponent";
import ListItemComponent from "@/components/contentful/ListItemComponent";
import OrderedListComponent from "@/components/contentful/OrderedListComponent";
import ParagraphComponent from "@/components/contentful/ParagraphComponent";
import UnknownBlockComponent from "@/components/contentful/UnknownBlockComponent";
import TableCellComponent from "@/components/contentful/TableCellComponent";
import TableComponent from "@/components/contentful/TableComponent";
import TableHeaderCellComponent from "@/components/contentful/TableHeaderCellComponent";
import TableRowComponent from "@/components/contentful/TableRowComponent";
import TextComponent from "@/components/contentful/TextComponent";
import UnknownInlineComponent from "@/components/contentful/UnknownInlineComponent";
import UnorderedListComponent from "@/components/contentful/UnorderedListComponent";
import BoldMark from "@/components/contentful/mark/BoldMark";
import CodeMark from "@/components/contentful/mark/CodeMark";
import ItalicMark from "@/components/contentful/mark/ItalicMark";
import SubscriptMark from "@/components/contentful/mark/SubscriptMark";
import SuperscriptMark from "@/components/contentful/mark/SuperscriptMark";
import UnderlineMark from "@/components/contentful/mark/UnderlineMark";
import { FC, ReactNode } from "react";

export type NodeRendererComponent = FC<{
  node: any;
  renderers: RendererMap;
  context: any;
}>;

export type BlockRenderers = Record<
  BLOCKS,
  FC<{ node: any; renderers: RendererMap }>
>;
export type InlineRenderers = Record<
  INLINES,
  FC<{ node: any; renderers: RendererMap }>
>;
export type MarkRenderers = Record<MARKS, FC<{ children: ReactNode }>>;

export type RichTextDocumentContext = Record<string, unknown>;

export type RendererMap = {
  fallback: NodeRendererComponent | Promise<NodeRendererComponent>;
  node: Record<string, NodeRendererComponent>;
  mark: MarkRenderers;
};

type Props = {
  document: Document;
  nodeRenderers?: Record<string, NodeRendererComponent>;
  fallbackNodeRenderer?: NodeRendererComponent | Promise<NodeRendererComponent>;
  markRenderers?: Partial<MarkRenderers>;
  context?: Record<string, unknown>;
};

export const defaultMarkRenderers: MarkRenderers = {
  [MARKS.BOLD]: BoldMark,
  [MARKS.ITALIC]: ItalicMark,
  [MARKS.CODE]: CodeMark,
  [MARKS.UNDERLINE]: UnderlineMark,
  [MARKS.SUPERSCRIPT]: SuperscriptMark,
  [MARKS.SUBSCRIPT]: SubscriptMark
};

export const defaultNodeRenderers: Record<string, NodeRendererComponent> = {
  [BLOCKS.PARAGRAPH]: ParagraphComponent,
  [BLOCKS.HEADING_1]: H1Component,
  [BLOCKS.HEADING_2]: H2Component,
  [BLOCKS.HEADING_3]: H3Component,
  [BLOCKS.HEADING_4]: H4Component,
  [BLOCKS.HEADING_5]: H5Component,
  [BLOCKS.HEADING_6]: H6Component,
  [INLINES.HYPERLINK]: HyperlinkComponent,
  [INLINES.ASSET_HYPERLINK]: UnknownInlineComponent,
  [INLINES.EMBEDDED_ENTRY]: UnknownInlineComponent,
  [INLINES.ENTRY_HYPERLINK]: UnknownInlineComponent,
  [BLOCKS.OL_LIST]: OrderedListComponent,
  [BLOCKS.UL_LIST]: UnorderedListComponent,
  [BLOCKS.HR]: HrComponent,
  [BLOCKS.QUOTE]: BlockquoteComponent,
  [BLOCKS.TABLE]: TableComponent,
  [BLOCKS.EMBEDDED_ENTRY]: UnknownBlockComponent,
  [BLOCKS.EMBEDDED_ASSET]: UnknownBlockComponent,
  [BLOCKS.EMBEDDED_RESOURCE]: UnknownBlockComponent,
  [BLOCKS.DOCUMENT]: UnknownBlockComponent,
  [BLOCKS.LIST_ITEM]: ListItemComponent,
  [BLOCKS.TABLE_ROW]: TableRowComponent,
  [BLOCKS.TABLE_CELL]: TableCellComponent,
  [BLOCKS.TABLE_HEADER_CELL]: TableHeaderCellComponent,
  text: TextComponent
};

const RichTextDocument: FC<Props> = ({
  document,
  nodeRenderers = {},
  markRenderers = {},
  fallbackNodeRenderer = UnknownBlockComponent,
  context = undefined
}) => {
  const { content } = document;

  const renderers: RendererMap = {
    fallback: fallbackNodeRenderer,
    mark: {
      ...defaultMarkRenderers,
      ...markRenderers
    },
    node: {
      ...defaultNodeRenderers,
      ...nodeRenderers
    }
  };

  return (
    <>
      {content.map((node, i) => {
        const Component = renderers.node[node.nodeType] || renderers.fallback;
        return (
          <Component
            node={node}
            key={i}
            renderers={renderers}
            context={context}
          />
        );
      })}
    </>
  );
};

export default RichTextDocument;
