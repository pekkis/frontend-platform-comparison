import { Slot, component$ } from "@builder.io/qwik";
import * as styles from "./Main.css";

const Main = component$(() => {
  return (
    <main class={styles.main}>
      <Slot />
    </main>
  );
});

export default Main;
