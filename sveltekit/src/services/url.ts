import { DateTime } from "luxon";

export const blogPostUrl = (post: { date: string; slug: string }) => {
  const date = DateTime.fromISO(post.date).setZone("Europe/Helsinki");

  return `/blogi/${date.toFormat("yyyy/LL/dd")}/${post.slug}`;
};
