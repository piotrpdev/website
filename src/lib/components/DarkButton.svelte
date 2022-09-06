<script>
	import { onMount } from 'svelte';
	import { crossfade } from 'svelte/transition';
	import SunSvg from './svg/SunSVG.svelte';
	import MoonSvg from './svg/MoonSVG.svelte';
	import { browser } from '$app/environment';

	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	let currentTheme = THEMES.LIGHT;

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (currentTheme === THEMES.DARK) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			// clear storage
			localStorage.removeItem(STORAGE_KEY);
		} else {
			// store opposite of preference
			localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
		}
		applyTheme();
	};

	onMount(() => {
		if (browser) {
			applyTheme();
			window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
		}
	});

	const cross = crossfade({
		duration: 1000
	});
</script>

<button class="dark-toggle" on:click={toggleTheme}>
	<div>
		{#if currentTheme === THEMES.LIGHT}
			<SunSvg {cross} />
		{:else}
			<MoonSvg {cross} />
		{/if}
	</div>
</button>
