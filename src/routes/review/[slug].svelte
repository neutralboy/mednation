<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`review/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Accordion from '../../components/accordion.svelte';
	import IconMenu from '../../components/icon-menu.svelte';
	export let post;
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
</style>
<section class="section">
	<div class="container">
		<div class="header has-text-centered">
			<h1 class="is-size-2 is-family-secondary has-text-black">{post.title}</h1>
		</div>
		<div class="has-text-centered">
			<button class="button is-black is-medium is-rounded ">{post.state}</button>
		</div>
	</div>
</section>
<div class="image has-text-centered">
	<img alt={post.title} src={"https://backend.mednation.org"+processImage(post.main_image.path)} >
</div>
<section class="section">
	<div class="container">
		<div class="content">
			<p>{post.main_body}</p>
		</div>

			<div class="has-text-centered">
				<IconMenu />
			</div>

		<div id="campus" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">Campus</h3>
			<div class="content">
				<p>{post.campus_summary}</p>
			</div>
			<div class="columns">
				<div class="column is-half-desktop is-full-desktop">
					<Accordion title="College" content={post.college_specifics} />
				</div>
				<div class="column is-half-desktop is-full-desktop">
					<Accordion title="Hospital" content={post.hospital_specifics} />
				</div>
			</div>
		</div>

		<div id="hostel" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">Hostel</h3>
			<div class="content">
				<p>{post.hostel_summary}</p>
			</div>
			<div class="columns">
				<div class="column is-half-desktop is-full-mobile">
					<Accordion title="Mens Hostel" content={post.mens_hostel} />
				</div>
				<div class="column is-half-desktop is-full-mobile">
					<Accordion title="Ladies Hostel" content={post.ladies_hostel} />
				</div>
			</div>
		</div>

		<div id="safety" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">Safety</h3>
			<div class="content"><p> {post.safety_summary} </p></div>
			<Accordion title="Read More" content={post.safety_specifics} />
		</div>

		<div id="transport" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">Transport</h3>
			<div class="content"><p> {post.transport_summary} </p></div>
			<Accordion title="Read More" content={post.transport_specifics} />
		</div>

		<div id="comp" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">Competitions</h3>
			<div class="content"><p> {post.competitions_summary} </p></div>
			<div class="columns">
				<div class="column is-one-third-desktop is-full-mobile">
					<Accordion title="Fests" content={post.fests} />
				</div>
				<div class="column is-one-third-desktop is-full-mobile">
					<Accordion title="Culturals" content={post.culturals} />
				</div>
				<div class="column is-one-third-desktop is-full-mobile">
					<Accordion title="Sports" content={post.sports} />
				</div>
			</div>
		</div>

		<div id="lifestyle" class="heading">
			<h3 class="is-size-3 has-text-black is-family-secondary">Lifestyle</h3>
			<div class="content"><p> {post.lifestyle_summary} </p></div>
			<Accordion title="Read More" content={post.lifestyle_specifics} />
		</div>


	</div>
</section>