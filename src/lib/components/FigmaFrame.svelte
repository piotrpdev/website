<script>
	let show = false;
	export let src;
</script>

{#if show}
	<iframe
		title="Figma prototype"
		style="border: 1px solid rgba(0, 0, 0, 0.1);"
		width="800"
		height="450"
		{src}
		allowfullscreen
	/>
{:else}
	<button type="button" on:click={() => (show = true)}>Show</button>
{/if}
