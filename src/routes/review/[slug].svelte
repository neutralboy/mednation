<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`review/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data, slug: params.slug };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Og from "../../components/og.svelte";
	import Accordion from '../../components/accordion.svelte';
	export let post;
	export let slug;
	function processImage(img){
        if(img[0] != "/"){
            return "/"+img;
        }
        return img;
	}
</script>

<style lang="scss" >
	@import "../main.scss";
	@import "bulma/sass/grid/columns.sass";
	@import "bulma/sass/elements/icon.sass";
	.level-header{ margin-top: 1.4rem; }
	.image{
		padding: 0;
		background-color: rgb(250, 237, 237);
		img{
			max-height: 60vh;
		}
	}
	.heading{ 
		margin-top: 2rem;
		h3{
			max-width: 70%;
			border-bottom: 2px solid black;
			margin-bottom: 1.4rem;
		}
	}
	.rating{
		color: black;
		font-size: 0.8rem;
		border: 2px solid $success;
		border-radius: 5px;
		display: inline-block;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
	.value{
		font-size: 2.6rem;
		font-family: $family-primary;
		color: $primary;
		font-weight: bold;
	}
	.total{
		margin-left: 0.4rem;
	}
}
</style>
<Og url={"review/"+slug} title={post.title.iv} image={post.image.iv[0]} description={post.summary.iv.substring(0, 80) + "..."} />
<section class="section">
	<div class="container">
		<div class="header has-text-centered">
			<h1 class="is-size-2 is-family-secondary has-text-black">{post.title.iv}</h1>
		</div>
		<div class="columns is-mobile">
			<div class="column is-6 has-text-centered">
				<button class="button is-medium is-text">
					<span class="icon">
						<img alt="state" src="https://img.icons8.com/plasticine/100/000000/india.png"/>
					</span>
					<span>{post.state.iv}</span>
				</button>
			</div>
			<div class="column is-6 has-text-centered">
				<a target="_blank" rel="nofollow" href={`https://www.google.com/maps/search/?api=1&query=${post.location.lat},${post.location.lng}`} class="button is-medium is-text">
					<span class="icon">
						<img alt="location" src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png"/>
					</span>
					<span>{post.location.iv.latitude.toFixed(2) +", "+post.location.iv.longitude.toFixed(2)}</span>
				</a>
			</div>
	</div>
</section>
<div class="image has-text-centered">
	<img alt={post.title.iv} src={"https://cloud.squidex.io/api/assets/mednation-review/"+post.image.iv[0]} >
</div>
<section class="section">
	<div class="container">
		<div class="content">
			<p>{post.summary.iv}</p>
		</div>

		<div id="campus" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">
				<span class="icon is-large">
					<img alt="student" src="https://img.icons8.com/dusk/64/000000/student-center.png"/>
				</span>
				Campus
			</h3>
			<div class="content">
				<p>{post.campusSummary.iv}</p>
			</div>
			<div class="columns">
				<div class="column is-half-desktop is-full-desktop">
					<Accordion title="College" content={post.collegeSpecifics.iv} />
				</div>
				<div class="column is-half-desktop is-full-desktop">
					<Accordion title="Hospital" content={post.hospitalSpecifics.iv} />
				</div>
			</div>
		</div>

		<div id="hostel" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">
				<span class="icon is-large">
					<img alt="hostel" src="https://img.icons8.com/dusk/64/000000/3-star-hotel.png"/>
				</span>
				Hostel
			</h3>
			<div class="content">
				<p>{post.hostelSummary.iv}</p>
			</div>
			<div class="columns">
				<div class="column is-half-desktop is-full-mobile">
					<Accordion title="Mens Hostel" content={post.mensHostel.iv} />
				</div>
				<div class="column is-half-desktop is-full-mobile">
					<Accordion title="Ladies Hostel" content={post.ladiesHostel.iv} />
				</div>
			</div>
		</div>

		<div id="safety" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">
				<span class="icon is-large">
					<img alt="safety" src="https://img.icons8.com/cotton/64/000000/safety-vest-1.png"/>
				</span>
				Safety
			</h3>
			<div class="content"><p> {post.safetySummary.iv} </p></div>
			<Accordion title="Read More" content={post.safetySpecifics.iv} />
		</div>

		<div id="transport" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">
				<span class="icon is-large">
					<img alt="transport" src="https://img.icons8.com/dusk/50/000000/bus.png"/>
				</span>
				Transport
			</h3>
			<div class="content"><p> {post.transportSummary.iv} </p></div>
			<Accordion title="Read More" content={post.transportSpecifics.iv} />
		</div>

		<div id="comp" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">
				<span class="icon is-large">
					<img alt="trophy" src="https://img.icons8.com/dusk/50/000000/trophy.png"/>
				</span>
				Competitions
			</h3>
			<div class="content"><p> {post.competitionsSummary.iv} </p></div>
			<div class="columns">
				<div class="column is-one-third-desktop is-full-mobile">
					<Accordion title="Fests" content={post.fests.iv} />
				</div>
				<div class="column is-one-third-desktop is-full-mobile">
					<Accordion title="Culturals" content={post.culturals.iv} />
				</div>
				<div class="column is-one-third-desktop is-full-mobile">
					<Accordion title="Sports" content={post.sports.iv} />
				</div>
			</div>
		</div>

		<div id="lifestyle" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">
				<span class="icon is-large">
					<img alt="party" src="https://img.icons8.com/dusk/50/000000/dancing-party.png"/>
				</span>
				Lifestyle
			</h3>
			<div class="content"><p> {post.lifestyleSummary.iv} </p></div>
			<Accordion title="Read More" content={post.lifestyleSpecifics.iv} />
		</div>


	</div>
</section>