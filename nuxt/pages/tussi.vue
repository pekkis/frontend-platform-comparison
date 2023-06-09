<template>
  {{ pending ? "true" : "false" }}
  {{ error }}
  <div v-if="data">
    <ul>
      <li v-for="post in data.blogPostCollection.items">
        {{ post.title }}
      </li>
    </ul>
  </div>
  <div v-else>hehe</div>
</template>

<script setup>
import { gql } from "graphql-request";

const client = useGraphqlClient();

const { data, pending, error } = await useAsyncData(
  "ddd",
  async () => {
    console.log("hip hap vitun huu");

    try {
      const ret = await client.request(
        gql`
          query Headlines($limit: Int! = 10) {
            blogPostCollection(
              order: [date_DESC]
              limit: $limit
              where: { visible: true }
            ) {
              total
              items {
                sys {
                  id
                }
                visible
                date
                title
                slug
                ingress
              }
            }
          }
        `,
        {
          limit: 10,
        }
      );
      return ret;
    } catch (e) {
      console.log(e);
      return { blogPostCollection: { items: [] } };
    }

    console.log("ret", ret);
  },
  {
    lazy: false,
    immediate: true,
    server: true,
  }
);
</script>
