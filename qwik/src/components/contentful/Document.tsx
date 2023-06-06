import { FunctionComponent, JSXNode, component$ } from "@builder.io/qwik";
import { BLOCKS, Node, TopLevelBlockEnum } from "@contentful/rich-text-types";
import type {
  Block,
  Document,
  Inline,
  Text,
  Paragraph
} from "@contentful/rich-text-types";
import Paragraph from "./Paragraph";
import ParagraphComponent from "./ParagraphComponent";

type Props = {
  document: Document;
};

const componentMap: Record<
  TopLevelBlockEnum,
  FunctionComponent<{ node: Node }>
> = {
  [BLOCKS.PARAGRAPH]: ParagraphComponent
} as const;

const DefaultComponent = component$(({ node }: { node: Node }) => {
  return <div>{JSON.stringify(node)}</div>;
});

export default component$<Props>(({ document }) => {
  const { content, ...rest } = document;

  return (
    <>
      <div>{JSON.stringify(rest)}</div>
      <div>
        {content.map((node, i) => {
          const Component = componentMap[node.nodeType] || DefaultComponent;

          return <Component node={node} key={i} />;
        })}
      </div>
    </>
  );
});
