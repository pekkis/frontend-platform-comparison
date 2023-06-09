import Main from "@/components/Main";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 60
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString()
  };
});

export default component$(() => {
  const pieru = useServerTimeLoader();

  return (
    <>
      <Header />
      <Main>
        <Slot />
        {pieru.value.date}
      </Main>
      <Footer />
    </>
  );
});
