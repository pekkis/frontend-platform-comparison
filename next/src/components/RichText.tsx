import React, { FC, ReactNode } from "react";

import {
  BLOCKS,
  MARKS,
  INLINES,
  Block,
  Inline,
  Node,
  Hyperlink,
  Heading1
} from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options
} from "@contentful/rich-text-react-renderer";

import BlogInlinePicture from "./BlogInlinePicture";
import Link from "next/link";
import { BlogPostType, ContentfulImageData } from "@/types";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import RichTextDocument, { RendererMap } from "./contentful/RichTextDocument";
import NodeList from "./contentful/NodeList";

// const website_url = "https://www.pekkis.eu";

const isExternalUrl = (url: string) => {
  if (!url.startsWith("http")) {
    return false;
  }

  return !url.startsWith("https://www.pekkis.eu");
};

type MarkComponentProps = {
  children: ReactNode;
};

type Context = {
  assets: {
    [k: string]: ContentfulImageData;
  };
};

type NodeComponentProps<N> = {
  context: Context;
  node: N;
  renderers: RendererMap;
};

const BoldComponent: FC<MarkComponentProps> = ({ children }) => (
  <strong>{children}</strong>
);
const ItalicComponent: FC<MarkComponentProps> = ({ children }) => (
  <em>{children}</em>
);

const LinkComponent: FC<NodeComponentProps<Hyperlink>> = ({
  node,
  context,
  renderers
}) => {
  const isExternal = isExternalUrl(node.data.uri);

  if (!isExternal) {
    return (
      <Link href={node.data.uri}>
        <NodeList
          nodes={node.content}
          context={context}
          renderers={renderers}
        />
      </Link>
    );
  }

  return (
    <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
      <NodeList nodes={node.content} context={context} renderers={renderers} />
    </a>
  );
};

const H1Component: FC<NodeComponentProps<Heading1>> = ({
  node,
  renderers,
  context
}) => {
  return (
    <MainHeading>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </MainHeading>
  );
};

const H2Component: FC<NodeComponentProps<Heading2>> = ({
  node,
  renderers,
  context
}) => {
  return (
    <SubHeading>
      <NodeList nodes={node.content} renderers={renderers} context={context} />
    </SubHeading>
  );
};

/*
const createOptions = (post: BlogPostType): Options => {
  const assets = Object.fromEntries(
    post.content.links.assets.block.map((b) => {
      return [b.sys.id, b];
    })
  );


  const options: Options = {
      [BLOCKS.HEADING_1]: (x, children) => {
        return <MainHeading>{children}</MainHeading>;
      },

      [BLOCKS.HEADING_2]: (x, children) => {
        return <SubHeading>{children}</SubHeading>;
      },

    }
  };
  return options;
};
*/

type Props = {
  post: BlogPostType;
};

const EmbeddedAssetComponent: FC<NodeComponentProps<Node>> = ({
  node,
  context: { assets }
}) => {
  const assetore = assets[node.data.target.sys.id];
  if (assetore) {
    return <BlogInlinePicture asset={assetore} />;
  }

  return (
    <>
      <h2>Embedded Asset</h2>
      <pre>
        <code>{JSON.stringify(node, null, 2)}</code>
      </pre>
    </>
  );
};

const RichText: FC<Props> = ({ post }) => {
  // const options = createOptions(props.post);

  const assets = Object.fromEntries(
    post.content.links.assets.block.map((b) => {
      return [b.sys.id, b];
    })
  );

  return (
    <RichTextDocument
      context={{
        assets
      }}
      document={post.content.json}
      nodeRenderers={{
        [BLOCKS.EMBEDDED_ASSET]: EmbeddedAssetComponent,
        [INLINES.HYPERLINK]: LinkComponent,
        [BLOCKS.HEADING_1]: H1Component,
        [BLOCKS.HEADING_2]: H2Component
      }}
      markRenderers={{
        [MARKS.BOLD]: BoldComponent,
        [MARKS.ITALIC]: ItalicComponent
      }}
    />
  );
};

export default RichText;
