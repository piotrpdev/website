<script>
	import GitHubSVG from './svg/GitHubSVG.svelte';
	import TwitterSVG from './svg/TwitterSVG.svelte';
	import LinkedInSVG from './svg/LinkedInSVG.svelte';
	import { siteAuthorGitHub, siteAuthorLinkedIn, siteAuthorTwitter } from '$lib/config';
</script>

<div class="social-card">
	<div>
		<img class="pfp" src="/images/pfp.jpg" alt="profile picture" />
	</div>
	<div class="social-main">
		<h3>Piotr Bogdan Płaczek</h3>

		<div class="social-list">
			<div>
				<a href={siteAuthorGitHub} target="_blank" rel="noopener noreferrer"
					><GitHubSVG class="icon" />piotrpdev</a
				>
			</div>
			<div>
				<a href={siteAuthorTwitter} target="_blank" rel="noopener noreferrer"
					><TwitterSVG class="icon" />@piotrpdev</a
				>
			</div>
			<div>
				<a href={siteAuthorLinkedIn} target="_blank" rel="noopener noreferrer"
					><LinkedInSVG class="icon" />peter-bogdan-placzek</a
				>
			</div>
		</div>
	</div>
</div>
