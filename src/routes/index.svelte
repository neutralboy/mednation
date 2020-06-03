<script>
	import Og from '../components/og.svelte';
	let latest = [
		{ name: "ABC institute of medical sciences", location: "XYZ" },
		{ name: "ABC institute of medical sciences", location: "XYZ" },
		{ name: "ABC institute of medical sciences", location: "XYZ" },
		{ name: "ABC institute of medical sciences", location: "XYZ" }
	]
</script>
<style >
	.main-img{
		max-height: 20rem;
	}
</style>

<Og title="Homepage" />


	<div class="container">
		<div class="row is-vcentered">
			<div class="col-xs-12 col-lg-6">
				<div class="has-text-centered">
					<h1 style="font-size: 3rem;" class="color-black font-brand">Mednation</h1>
					<h3 class="is-size-4 is-family-secondary">A community of Med students.</h3>
				</div>
			</div>
			<div class="col-xs-12 col-lg-6 has-text-centered padding-m">
				<figure>
					<img class="main-img" alt="medical students" src="https://res.cloudinary.com/poorna/image/upload/v1590305977/undraw_medical_research_qg4d.svg" />
				</figure>
			</div>
		</div>
	</div>



	<div class="container">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque pulvinar pellentesque habitant morbi. In metus vulputate eu scelerisque felis imperdiet proin. Id faucibus nisl tincidunt eget nullam non nisi est sit. Vitae turpis massa sed elementum tempus egestas. Mauris vitae ultricies leo integer malesuada nunc vel.</p>
	</div>


	<div class="container has-background-primary no-max-width">
		<h2 class="is-size-2 is-family-secondary color-white">Latest Reviews</h2>
		<div class="row padding-s ">

			{#each latest as { name, location }}
				<div class="col-lg-3 col-xs-12 margin-vertical-1-2" >
					<div class="box-shadow-s padding-s background-white border-radius">
						<h4 class="is-family-secondary">{name}</h4>
						<p>Location: <b>{location}</b></p>
					</div>
				</div>
			{/each}


		</div>

		<div class="box-shadow-s padding-s has-text-centered background-white border-radius">
			<h2 class="is-size-3 is-family-secondary">Is your college listed here?</h2>
			<br>
			<a class="button is-medium background-black color-white button-block">Write a review</a>
		</div>
	</div>
