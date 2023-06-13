import { Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { Mark } from "@contentful/rich-text-types";

type Props = {
  mark: Mark;
};

export default component$<Props>(({ mark }) => {
  switch (mark.type) {
    case "bold":
      return (
        <strong>
          <Slot />
        </strong>
      );
    case "italic":
      return (
        <em>
          <Slot />
        </em>
      );
  }

  return (
    <>
      <Slot />
    </>
  );
});
