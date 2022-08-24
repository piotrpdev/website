<script>
	// Yoinked from https://github.com/josh-collinsworth/joco-sveltekit/blob/main/src/routes/contact/%2Bpage.svelte

	import { onMount } from 'svelte';

	let isSubmitted = false;
	let showError = false;

	let formData = {
		from_page: '',
		name: '',
		email: '',
		message: ''
	};

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		formData = { ...formData, from_page: params.get('from_page') };
	});

	const encode = (data) => {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	};

	const handleSubmit = (e) => {
		const { name, email, message, from_page } = formData;

		if (!name || !email || !message) {
			showError = true;
			return;
		}

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': e.target.getAttribute('name'),
				...formData
			})
		})
			.then(() => {
				isSubmitted = true;
			})
			.catch((error) => alert(error));
	};
</script>

<div class="compressed-content">
	<h2>Send me a message!</h2>

	{#if !isSubmitted}
		<noscript>
			<h3>Sorry, this contact form won't work without JavaScript enabled.</h3>
		</noscript>

		<p>
			<i
				>Want to send me a message <b>right now?</b>, fill out the form below. I'll try to get back
				to you as soon as I can :).
			</i>
		</p>

		<form
			id="contact-form"
			name="contact"
			method="post"
			on:submit|preventDefault={handleSubmit}
			action="/success/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label>
					Don’t fill this out: <input name="bot-field" />
				</label>
			</p>
			<input type="hidden" name="from_page" bind:value={formData.from_page} />
			<div class="sender-info">
				<div>
					<label for="name" class="label">Name</label>
					<input
						type="text"
						name="name"
						autocomplete="name"
						required
						pattern="^[a-zA-Z0-9 ]*$*"
						bind:value={formData.name}
						placeholder="Quandale Dingle"
						title="Please enter a proper name"
					/>
				</div>
				<div>
					<label for="email">Email Address</label>
					<input
						type="email"
						name="email"
						autocomplete="email"
						required
						title="Please enter a valid email address"
						bind:value={formData.email}
						placeholder="jamarius.quangledangle@hotmail.com"
					/>
				</div>
			</div>

			<div class="message-wrapper">
				<label for="message">Message</label>
				<textarea
					name="message"
					bind:value={formData.message}
					rows="6"
					placeholder="So... some crazy weather we're having, right?"
				/>
			</div>

			{#if showError}
				<div class="error">Please be sure all above fields are filled out (correctly). Thanks!</div>
			{/if}

			<button type="submit">Send</button>
		</form>
	{:else}
		<div class="success">
			<h3>Thanks for your message!</h3>
			<p>I'll follow up by email if this wasn't spam. :)</p>
		</div>
	{/if}
</div>
