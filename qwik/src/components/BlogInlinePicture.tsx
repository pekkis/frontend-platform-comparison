import type { ContentfulImageData } from "@/types";
import { descClass, rootClass } from "./BlogInlinePicture.css";
import ContentfulImage from "./ContentfulImage";
import { component$ } from "@builder.io/qwik";

type Props = {
  asset: ContentfulImageData;
};

const BlogInlinePicture = component$<Props>(({ asset }) => {
  return (
    <div class={rootClass}>
      <ContentfulImage
        alt="test"
        data={asset}
        config={{
          width: 1024,
          aspectRatio: 16 / 9,
          fit: "fill",
          focus: "face"
        }}
      />

      {asset.description && <p class={descClass}>{asset.description}</p>}
    </div>
  );
});
export default BlogInlinePicture;
