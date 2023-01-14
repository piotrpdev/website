<script>
	export let src, alt, arr, cc, wc, art, wcu, dg, white;
	import ExtLink from '$lib/components/ExtLink.svelte';
</script>

<div class="media-container">
	<figure>
		<img loading="lazy" class={`media ${white ? 'white' : ''}`} {alt} {src} />
		<figcaption>
			<i>
				<slot />
				{#if dg}
					Diagram by
					{#if wcu}
						<ExtLink href={`https://commons.wikimedia.org/wiki/User_talk:${wcu}`}>{wcu}</ExtLink>,
					{/if}
				{/if}
				{#if wc}
					<span
						>taken from <ExtLink href={`https://commons.wikimedia.org/wiki/File:${wc}`}
							>Wikimedia Commons</ExtLink
						>.</span
					>
				{/if}
				{#if art}
					<span>taken from <ExtLink href={art}>this article</ExtLink>.</span>
				{/if}
				{#if arr}
					<span>Copyright &copy; {arr}.</span>
				{/if}
				{#if cc}
					{#if cc == '3'}
						<span
							>Licensed under <ExtLink href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
								>CC BY-SA 3.0</ExtLink
							>.</span
						>
					{:else if cc == '4'}
						<span>
							Licensed under <ExtLink href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
								>CC BY-SA 4.0</ExtLink
							>.
						</span>
					{:else if cc == 'BY-NC 2.5'}
						<span
							>Licensed under <ExtLink href="https://creativecommons.org/licenses/by-nc/2.5/"
								>CC BY-NC 2.5</ExtLink
							>.</span
						>
					{/if}
				{/if}
			</i>
		</figcaption>
	</figure>
</div>
