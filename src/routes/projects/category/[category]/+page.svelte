<!-- TODO: add pagination to this route -->
<script>
	export let data;
	$: ({ posts, category, total } = data);

	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
</script>

<!-- This dynamic page renders any page at /blog/category/* -->

<svelte:head>
	<title>Category: {category}</title>
</svelte:head>

<h1>Projects category: {category}</h1>

{#if posts.length}
	<PostsList {posts} />
	<Pagination currentPage="1" totalPosts={total} path="/projects/category/{category}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href="/projects">Back to Projects</a></p>
{/if}
