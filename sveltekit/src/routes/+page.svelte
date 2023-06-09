<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>


  <ul>
    {#each data.posts.blogPostCollection.items as post (post.sys.id)}
      <li>
        {post.title}
      </li>
    {/each}
  </ul>

</section>

<style>
</style>
