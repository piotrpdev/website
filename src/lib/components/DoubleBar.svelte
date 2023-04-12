<script>
	export let title;
	export let data;
	export let xCallback;
	export let xTitle;
	export let yTitle;
	export let className;

	import { onMount } from 'svelte';

	let Bar;

	onMount(() => {
		// https://stackoverflow.com/questions/70240651/using-chart-js-with-sveltekit
		import('svelte-chartjs').then((module) => (Bar = module.Bar));
	});

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

<div class={`chart${className ? ` ${className}` : ''}`}>
	<svelte:component
		this={Bar}
		{data}
		options={{
			responsive: true,
			plugins: {
				title: {
					display: true,
					text: title
				}
			},
			scales: {
				x: {
					ticks: {
						callback: xCallback,
						text: xTitle
					}
				},
				y: {
					title: {
						display: true,
						text: yTitle
					}
				}
			}
		}}
	/>
</div>
