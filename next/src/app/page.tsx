import Bio from "@/components/Bio";
import BlogPosts from "@/components/BlogPosts";
import Layout from "@/components/Layout";
import Padder from "@/components/Padder";
import { graphQLClient, headlinesQuery } from "@/services/graphql";
import { HeadlineType } from "@/types";
import { siteMetadata } from "@/services/meta";
import MainHeading from "@/components/MainHeading";
import SubHeading from "@/components/SubHeading";
import Preachings from "@/components/Preachings";
import { getLinkzors, getPreachings } from "@/services/pexu";
import { getHeadlines } from "@/services/blog";

export const revalidate = 60 * 10;

export const metadata = {
  title: siteMetadata.title
};

export default async function IndexPage() {
  const headlines = await getHeadlines(
    6,
    process.env.CONTENTFUL_PREVIEW === "true"
  );

  const linkzors = await getLinkzors();

  const preachings = await getPreachings();

  return (
    <>
      <Layout>
        <Padder>
          <Bio />

          <MainHeading>Helei ja tervetuloa!</MainHeading>

          <p>
            Heipparallaa! Minä olen Pekkis, ohjelmoitsija ammatiltani, ja tämä
            on kotskaporttaalini.
          </p>

          <SubHeading>Pekkis-linkit</SubHeading>

          <ul>
            {linkzors.map((linkzor, i) => {
              return (
                <li key={i}>
                  <a
                    href={linkzor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkzor.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <SubHeading>Pekkis kirjoittaa</SubHeading>

          <BlogPosts
            posts={headlines.blogPostCollection.items.filter(
              (h) => h.visible || process.env.NEXT_PUBLIC_SHOW_INVISIBLE
            )}
          />

          <SubHeading>Pekkis saarnaa</SubHeading>

          <Preachings videos={preachings} />
        </Padder>
      </Layout>
    </>
  );
}
