<script>
	import { siteAuthorGitHub, siteAuthorLinkedIn, siteAuthorTwitter } from '$lib/config';
	import GitHubSVG from './svg/GitHubSVG.svelte';
	import TwitterSVG from './svg/TwitterSVG.svelte';
	import LinkedInSVG from './svg/LinkedInSVG.svelte';

	let className = '';
	export { className as class };
</script>

<div class={`socials${className ? ` ${className}` : ''}`}>
	<a href={`${siteAuthorGitHub}`} target="_blank"><GitHubSVG class="icon" /></a>
	<a href={`${siteAuthorTwitter}`} target="_blank"><TwitterSVG class="icon" /></a>
	<a href={`${siteAuthorLinkedIn}`} target="_blank"><LinkedInSVG class="icon" /></a>
</div>
