import type {
  Block,
  Document,
  Inline,
  Text
} from "@contentful/rich-text-types";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { nodeToReactComponent } from "./contentful/nodeListToComponent";
import { type JSXNode } from "@builder.io/qwik";

const defaultNodeRenderers: RenderNode = {
  [BLOCKS.DOCUMENT]: (node, children) => children,
  [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
  [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
  [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
  [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
  [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
  [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
  [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
  [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
  [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  [BLOCKS.HR]: () => <hr />,
  [BLOCKS.TABLE]: (node, children) => (
    <table>
      <tbody>{children}</tbody>
    </table>
  ),
  [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
  [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,
  [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
  [INLINES.ASSET_HYPERLINK]: (node) =>
    defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
  [INLINES.ENTRY_HYPERLINK]: (node) =>
    defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
  [INLINES.EMBEDDED_ENTRY]: (node) =>
    defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
  [INLINES.HYPERLINK]: (node, children) => (
    <a href={node.data.uri}>{children}</a>
  )
};

const defaultMarkRenderers: RenderMark = {
  [MARKS.BOLD]: (text) => <b>{text}</b>,
  [MARKS.ITALIC]: (text) => <i>{text}</i>,
  [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
  [MARKS.CODE]: (text) => <code>{text}</code>,
  [MARKS.SUPERSCRIPT]: (text) => <sup>{text}</sup>,
  [MARKS.SUBSCRIPT]: (text) => <sub>{text}</sub>
};

function defaultInline(type: string, node: Inline): JSXNode {
  return (
    <span key={node.data.target.sys.id}>
      type: {node.nodeType} id: {node.data.target.sys.id}
    </span>
  );
}

export type CommonNode = Text | Block | Inline;

export interface NodeRenderer {
  (node: Block | Inline, children: JSXNode): JSXNode;
}

export interface RenderNode {
  [k: string]: NodeRenderer;
}

export interface RenderMark {
  [k: string]: (text: JSXNode) => JSXNode;
}

export interface RenderText {
  (text: string): JSXNode;
}

export interface Options {
  /**
   * Node renderers
   */
  renderNode?: RenderNode;
  /**
   * Mark renderers
   */
  renderMark?: RenderMark;
  /**
   * Text renderer
   */
  renderText?: RenderText;
}

/**
 * Serialize a Contentful Rich Text `document` to React tree
 */
export function documentToReactComponents(
  richTextDocument: Document,
  options: Options = {}
): JSXNode | null {
  if (!richTextDocument) {
    return null;
  }

  return nodeToReactComponent(richTextDocument, {
    renderNode: {
      ...defaultNodeRenderers,
      ...options.renderNode
    },
    renderMark: {
      ...defaultMarkRenderers,
      ...options.renderMark
    },
    renderText: options.renderText
  });
}
