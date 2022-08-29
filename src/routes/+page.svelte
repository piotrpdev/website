<script>
	import IndexProject from '$lib/components/IndexProject.svelte';

	const projects = [
		{
			thumb: '/images/cao-dark.jpg',
			link: 'https://leavingcertcao.xyz/',
			title: 'CAO Calculator',
			description:
				'Android app that helps calculate how many CAO points you need to qualify for a course.',
			school: null
		},
		{
			thumb: '/images/sheet.jpg',
			link: 'https://github.com/piotrpdev/WeBuy-Cex-Price-Tracker',
			title: 'WeBuy Cex Price Tracker',
			description:
				'A python script that gets the prices of certain Cex products and uploads them to google sheets.',
			school: null
		},
		{
			thumb: '/images/wit-timetable.png',
			link: 'https://github.com/piotrpdev/WIT-Timetable-Generator',
			title: 'WIT Timetable Generator',
			description:
				'Uses Puppeteer to automatically fill out the WIT Timetable Page and generate a screenshot and PDF of the timetable.',
			school: null
		},
		{
			thumb: '/images/wd1ca1.jpg',
			link: 'https://peter-wd2ca1.netlify.app/',
			title: 'Sun Tracker™',
			description:
				'Website that displays the current position of the sun in a variety of countries.',
			school: 'Semester 2'
		},
		{
			thumb: '/images/wd1ca2.jpg',
			link: 'https://peter-wd1ca2.netlify.app/',
			title: 'Rosslare Tidy Towns',
			description:
				'Website dedicated to Rosslare Tidy Towns, a non-profit organization in my town.',
			school: 'Semester 1'
		}
	];
</script>

<svelte:head>
	<title>Piotr Płaczek</title>
</svelte:head>

<div>
	<h1>Welcome</h1>

	<p>
		This is where I plan to show off my portfolio as I progress through my programming career. Feel
		free to check out any of the pages available.
	</p>
</div>

<div>
	<h2>Who are you?</h2>

	<p>
		I am a software/web developer, currently studying at the <a
			href="https://setu.ie/"
			target="_blank"
			rel="noopener noreferrer">South East Technological University</a
		>
		in Ireland. I love music and messing around with electronics. Go check out the
		<a href="/about">About page</a> to learn more.
	</p>
</div>

<div>
	<h2>Any projects?</h2>

	<p>Yes! These are my most notable ones right now:</p>

	<div class="projects-list">
		{#each projects as project}
			<IndexProject {...project} />
		{/each}
	</div>
</div>

<div>
	<h2>Can I contact you?</h2>

	<p>
		Sure, I would love to talk. Check out the <a href="/contact">Contact page</a> to see all of my social
		media.
	</p>
</div>
