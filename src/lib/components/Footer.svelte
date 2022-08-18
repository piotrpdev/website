<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';
	import Socials from './Socials.svelte';
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" rel="external">RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<div class="footer-info">
		<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
		<Socials />
	</div>
</footer>
