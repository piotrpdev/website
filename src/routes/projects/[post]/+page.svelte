<!-- This file renders each individual projects post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;
	$: ({
		PostContent,
		meta: { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories }
	} = data);

	import { browser } from '$app/env';
	import fixYTVideos from '$lib/assets/js/fixYTVideos';

	import { onMount } from 'svelte';

	const showIcon =
		'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.8"><path d="M23.59 0h75.7a23.63 23.63 0 0 1 23.59 23.59v72.62a23.64 23.64 0 0 1-23.59 23.59h-75.7a23.53 23.53 0 0 1-16.67-6.93l-.38-.42A23.49 23.49 0 0 1 0 96.21V23.59A23.63 23.63 0 0 1 23.59 0Zm59.7 53.51a6.39 6.39 0 1 1 0 12.77h-43.7a6.39 6.39 0 1 1 0-12.77Zm16-40.74h-75.7a10.86 10.86 0 0 0-10.82 10.82v72.62a10.77 10.77 0 0 0 2.9 7.37l.28.26a10.76 10.76 0 0 0 7.64 3.16h75.7a10.87 10.87 0 0 0 10.82-10.82V23.59a10.86 10.86 0 0 0-10.82-10.82Z"/></svg>';
	const hideIcon =
		'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.8"><path d="M23.59 0h75.7a23.63 23.63 0 0 1 23.59 23.59v72.62a23.64 23.64 0 0 1-23.59 23.59h-75.7a23.53 23.53 0 0 1-16.67-6.93l-.38-.42A23.49 23.49 0 0 1 0 96.21V23.59A23.63 23.63 0 0 1 23.59 0Zm31.47 38.05a6.38 6.38 0 1 1 12.76 0v15.46h15.47a6.39 6.39 0 1 1 0 12.77H67.82v15.47a6.38 6.38 0 0 1-12.76 0V66.28H39.59a6.39 6.39 0 1 1 0-12.77h15.47V38.05Zm44.23-25.28h-75.7a10.86 10.86 0 0 0-10.82 10.82v72.62a10.77 10.77 0 0 0 2.9 7.37l.28.26a10.76 10.76 0 0 0 7.64 3.16h75.7a10.87 10.87 0 0 0 10.82-10.82V23.59a10.86 10.86 0 0 0-10.82-10.82Z"/></svg>';

	let root;
	let fontSize;
	let scrollY = 0;
	let width = 1600;
	let position = 'absolute';
	let top = '16rem';

	$: root && typeof scrollY === 'number' && width && calculate_positions();

	function addTocButton() {
		const toc = document.querySelector('.toc');
		const button = document.createElement('button');
		button.type = 'button';
		button.classList.add('toc-toggle');
		button.innerHTML = showIcon;
		toc.prepend(button);
		button.addEventListener('click', () => {
			toc.classList.toggle('hide');
			button.classList.toggle('hide');
			if (button.classList.contains('hide')) {
				button.innerHTML = hideIcon;
			} else {
				button.innerHTML = showIcon;
			}
		});
	}

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

			fixYTVideos();

			fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

			calculate_positions();
		}
	});
</script>

<svelte:window bind:scrollY bind:innerWidth={width} />

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
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
