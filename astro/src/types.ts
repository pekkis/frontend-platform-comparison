import type { Document } from "@contentful/rich-text-types";

export type HeadlineType = {
  sys: {
    id: string;
  };

  date: string;
  title: string;
  slug: string;
  ingress: string;
  visible: boolean;
};

export type BlogPostType = HeadlineType & {
  mainImage: {
    image: ContentfulImageData;
  };
  content: {
    links: {
      assets: {
        block: ContentfulImageData[];
      };
    };
    json: Document;
  };
};

export type ContentfulImageData = {
  sys: {
    id: string;
  };
  title: string;
  url: string;
  width: number;
  height: number;
  description?: string;
};

export type VideoType = {
  videoId: string;
  title: string;
  description?: string;
  nsfw: boolean;
};
