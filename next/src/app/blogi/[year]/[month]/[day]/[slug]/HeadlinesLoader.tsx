import Headlines from "./Headlines";
import { HeadlinesQueryResponse } from "@/services/blog";

type Props = {
  headlines: Promise<HeadlinesQueryResponse>;
};

export default async function HeadlinesLoader({ headlines }: Props) {
  const pieru = await headlines;

  return <Headlines headlines={pieru.blogPostCollection.items} />;
}
