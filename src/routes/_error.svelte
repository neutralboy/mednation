
<script>
	export let status;
	export let error;
	const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="scss">
@import "../main.scss";
.imag{
	max-height: 60vh;
}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<section class="section" >
	<div class="container">
		<div class="has-text-centered">
			<img class="imag" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_767/v1591896254/doctor/8.png" alt="Page not found" />
		</div>
		<div class="content has-text-centered">
			<h1 class="is-size-1 has-text-black">{status}</h1>

			<p>{error.message}</p>
			<p>Sorry the page your looking for does not exist.</p>
			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}


		</div>

	</div>
</section>
