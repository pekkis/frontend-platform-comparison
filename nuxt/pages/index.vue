<script setup>
import { headlinesQuery } from "@/services/graphql";

const client = useGraphqlClient();

const { data: posts } = await useAsyncData(
  "hiphuu",
  async () => {
    console.log("hip hap vitun huu");

    const ret = await client.request(headlinesQuery);

    console.log("ret", ret);
    return ret;
  },
  {
    lazy: false,
    immediate: true,
    server: true,
  }
);
</script>

<template>
  <div v-if="posts">
    höhö

    <ul>
      <li v-for="post in posts.blogPostCollection.items">
        {{ post.title }}
      </li>
    </ul>
  </div>
  <div v-else>hehe</div>
</template>
