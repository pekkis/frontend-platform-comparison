import { FC } from "react";
import { ContentfulImageData } from "@/types";
import { rootClass, descClass } from "./BlogInlinePicture.css";
import ContentfulImage from "./ContentfulImage";

type Props = {
  asset: ContentfulImageData;
};

/*

<Image
          data={dictator.primaryImage}
          config={{ width: 150, aspectRatio: 0.75, fit: "fill", focus: "face" }}
          styles={{
            borderStyle: "solid",
            borderColor: "link",
            borderWidth: "1px",
            borderRadius: 1,
            display: "block",
          }}
          alt={dictator.name}
          */

const BlogInlinePicture: FC<Props> = ({ asset }) => {
  return (
    <div className={rootClass}>
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

      {asset.description && <p className={descClass}>{asset.description}</p>}
    </div>
  );
};
export default BlogInlinePicture;
