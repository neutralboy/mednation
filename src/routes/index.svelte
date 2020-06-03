<script>
	import Og from '../components/og.svelte';
	let latest = [
		{ name: "ABC institute of medical sciences", location: "XYZ" },
		{ name: "ABC institute of medical sciences", location: "XYZ" },
		{ name: "ABC institute of medical sciences", location: "XYZ" },
		{ name: "ABC institute of medical sciences", location: "XYZ" }
	]
</script>
<style lang="scss" >
	@import "../main.scss";
	@import "bulma/sass/grid/columns.sass";
	@import "bulma/sass/elements/box.sass";
	.main-img{
		max-height: 20rem;
	}
	.container{
		padding: 2rem;
	}
</style>

<Og title="Homepage" />

<section class="section">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-half-descktop is-full-mobile">
				<div class="has-text-centered">
					<h1 class="is-size-1 has-text-black font-brand">Mednation</h1>
					<h3 class="is-size-4 is-family-secondary">A community of Med students.</h3>
				</div>
			</div>
			<div class="column is-half-descktop is-full-mobile has-text-centered">
				<img class="main-img" alt="medical students" src="https://res.cloudinary.com/poorna/image/upload/v1590305977/undraw_medical_research_qg4d.svg" />
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi. In metus vulputate eu scelerisque felis imperdiet proin. Id faucibus nisl tincidunt eget nullam non nisi est sit. Vitae turpis massa sed elementum tempus egestas. Mauris vitae ultricies leo integer malesuada nunc vel.</p>
	</div>
</section>

<section class="section has-background-primary">
	<div class="container">
		<h2 class="is-size-2 is-family-secondary has-text-white">Latest Reviews</h2>
		<div class="columns">

		{#each latest as { name, location }}
			<div class="column is-one-quarter-desktop is-full-mobile" >
				<div class="box content">
					<h4 class="is-family-secondary">{name}</h4>
					<p>Location: <b>{location}</b></p>
				</div>
			</div>
		{/each}


		</div>

		<div class="box has-text-centered">
			<h3 class="is-size-3 is-family-secondary">Is your college listed here?</h3>
			<br>
			<a class="button is-medium has-background-black has-text-white is-fullwidth">Write a review</a>
		</div>
	</div>
</section>