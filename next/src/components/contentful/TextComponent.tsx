import type { MARKS } from "@contentful/rich-text-types";
import { type Text } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";
import { FC, ReactNode } from "react";

type Props = {
  node: Text;
  renderers: RendererMap;
  context: any;
};

const TextComponent: FC<Props> = ({ node, renderers }) => {
  return (
    <>
      {node.marks.reduce((a: ReactNode | string, m, i) => {
        const Component = renderers.mark[m.type as MARKS];
        return <Component key={i}>{a}</Component>;
      }, node.value)}
    </>
  );
};

export default TextComponent;
