import { component$, useSignal, $ } from "@builder.io/qwik";
import { peksu } from "./peksu.css";

export default component$(() => {
  /*
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });
  */

  return <div class={peksu}>PEKSU PÖKSY PLÖÖ</div>;
});
