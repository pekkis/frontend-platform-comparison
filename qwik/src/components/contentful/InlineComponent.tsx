import { component$ } from "@builder.io/qwik";
import { type Inline } from "@contentful/rich-text-types";

type Props = {
  node: Inline;
};

export default component$<Props>(({ node }) => {
  return <>{JSON.stringify(node)}</>;
});
