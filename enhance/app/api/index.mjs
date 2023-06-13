import { getHeadlines } from "../../services/blog.mjs";

export async function get(req) {
  const headlines = await getHeadlines();

  console.log(headlines, "hedlain");

  return {
    json: {
      headlines,
    },
  };
}
