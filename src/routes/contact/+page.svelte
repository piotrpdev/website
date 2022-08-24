<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SocialCard from '$lib/components/SocialCard.svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="contact-container">
	<div>
		<h1>Contact</h1>
	</div>
	<div class="contact-main">
		<div>
			If you want to talk to me about anything, feel free to message me on any of my social media{' '}<i
				>(or you could just come up to me in person ¯\_(ツ)_/¯).</i
			>
			<SocialCard />
		</div>
		<div>
			<ContactForm />
		</div>
	</div>
</div>
