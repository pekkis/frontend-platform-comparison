import { component$ } from "@builder.io/qwik";
import type { Hr } from "@contentful/rich-text-types";
import type { RendererMap } from "./RichTextDocument";

type Props = {
  node: Hr;
  renderers: RendererMap;
  context: any;
};

export default component$<Props>(() => {
  return <hr />;
});
