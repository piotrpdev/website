<script>
	export let title;
	export let data;

	import { onMount } from 'svelte';

	let Bar;

	onMount(() => {
		// https://stackoverflow.com/questions/70240651/using-chart-js-with-sveltekit
		import('svelte-chartjs').then((module) => (Bar = module.Bar));
	});

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

<div class="chart">
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
						callback: function (value) {
							return this.getLabelForValue(value).substring(4, 12);
						}
					}
				},
				y: {
					title: {
						display: true,
						text: 'Speed (ms)'
					}
				}
			}
		}}
	/>
</div>
