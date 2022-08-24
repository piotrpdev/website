<script>
	export let data;
	export let totals;

	const keys = Object.keys(data[0]);
</script>

<div class="speedTable">
	<table>
		<thead>
			<tr>
				{#each keys as functionName}
					<th>{functionName.substring(4)}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as times, i}
				<tr>
					{#each Object.values(times) as time}
						<td>{Number.parseFloat(time).toFixed(2)}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr />
			<tr>
				{#each keys as timeKey}
					<td><i>{totals[timeKey]}</i></td>
				{/each}
			</tr>
		</tfoot>
	</table>
</div>
