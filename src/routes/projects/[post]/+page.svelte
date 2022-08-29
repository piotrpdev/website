<!-- This file renders each individual projects post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;
	$: ({
		PostContent,
		meta: { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories }
	} = data);

	import { browser } from '$app/env';
	import addCopyCodeButtons from '$lib/assets/js/addCopyCodeButtons';
	import addTocButton from '$lib/assets/js/addTocButton';
	import fixYTVideos from '$lib/assets/js/fixYTVideos';
	import { siteLink, siteTitle } from '$lib/config';

	import { onMount } from 'svelte';

	let root;
	let fontSize;
	let scrollY = 0;
	let width = 1600;
	let position = 'absolute';
	let top = '16rem';

	$: root && typeof scrollY === 'number' && width && calculate_positions();

	// Yoinked from https://github.com/pngwn/MDsveX/blob/master/packages/site/src/routes/docs.svelte
	function calculate_positions() {
		if (window.innerWidth <= 1600) return;

		if (root.getBoundingClientRect().top >= 6 * fontSize) {
			position = 'absolute';
			top = '16rem';
		} else {
			position = 'fixed';
			top = '6rem';
		}
	}

	onMount(() => {
		if (browser) {
			if (document.querySelector('article>h2') === null) {
				document.querySelector('.toc').remove();
			} else {
				addTocButton();
			}

			addCopyCodeButtons();

			fixYTVideos();

			fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

			calculate_positions();
		}
	});
</script>

<svelte:window bind:scrollY bind:innerWidth={width} />

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title} | {siteTitle}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${title} | ${siteTitle}`} />
	<meta name="twitter:title" content={`${title} | ${siteTitle}`} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content={`${siteLink}${coverImage}`} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content={`${siteLink}${coverImage}`} />
</svelte:head>

<article class="post" bind:this={root} style="--tocPosition: {position}; --tocTop: {top}">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src={coverImage}
		alt="post cover"
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{title}</h1>

	<div class="meta">
		<b>Published:</b>
		{date}
		<br />
		<b>Updated:</b>
		{updated}
	</div>

	<svelte:component this={PostContent} />

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/projects/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>
