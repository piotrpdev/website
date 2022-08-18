<!-- Renders posts listed by category -->
<script>
	export let data;
	$: ({ page, totalPosts, posts } = data);

	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage, siteDescription } from '$lib/config';

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Projects - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
	<h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
	<Pagination currentPage={page} {totalPosts} />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/projects">Back to Projects</a>
{/if}
