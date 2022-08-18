<script>
	export let data;
	$: ({ posts, total, errors } = data);

	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';
</script>

<svelte:head>
	<title>Projects</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>Projects</h1>

<PostsList {posts} />

<Pagination currentPage={1} totalPosts={total} />
