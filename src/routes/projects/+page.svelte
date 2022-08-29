<script>
	export let data;
	$: ({ posts, total, errors } = data);

	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteTitle } from '$lib/config';
</script>

<svelte:head>
	<title>Projects | {siteTitle}</title>
</svelte:head>

<div class="projects-container">
	<h1>Projects</h1>

	<PostsList {posts} />
</div>

<Pagination currentPage={1} totalPosts={total} />
