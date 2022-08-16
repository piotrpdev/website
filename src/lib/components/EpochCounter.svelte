<script>
    import { onMount } from 'svelte';
    import { formatDistanceToNowStrict } from 'date-fns';

    let delta;
    const units = ['year', 'month', 'day', 'hour', 'minute', 'second'];
    let unitIndex = 0;

    const epoch = new Date(Date.UTC(2018, 6, 29, 8, 26, 0, 0));

    const refreshTime = () => delta = formatDistanceToNowStrict(epoch, { unit: units[unitIndex] });
    refreshTime();

    function changeUnit() {
        unitIndex = unitIndex >= units.length - 1 ? 0 : unitIndex + 1;
        refreshTime();
    }

    onMount(() => {
		const interval = setInterval(() => {
			refreshTime();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<span class="epochCounter" on:click={changeUnit}>{delta}</span>