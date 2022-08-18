<script>
	export let data;
	$: ({ uniqueCategories } = data);

	export let uniqueCategories;
</script>

<svelte:head>
	<title>Projects | Categories</title>
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">All project categories</h1>

	<ul>
		{#each uniqueCategories as category}
			<li>
				<a href="/projects/category/{category.title}">
					{category.title}
				</a>
				({category.count})
			</li>
		{/each}
	</ul>
</div>
