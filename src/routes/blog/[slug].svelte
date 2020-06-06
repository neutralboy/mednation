<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
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
	function processDate(d){

	}
</script>
<style lang="scss">
    @import "../main.scss";
	@import "bulma/sass/grid/columns.sass";
	.image{
		padding: 0;
		background-color: rgb(250, 237, 237);
		img{
			max-height: 60vh;
		}
	}
	.header{
		margin-bottom: 2rem;
	}
</style>
<Og url={"blog/"+slug} title={post.title} description={post.summary.substring(0, 80) + "..."} />
<section class="section">
    <div class="container is-fluid">

		<div class="header has-text-centered">
			<h1 class="is-size-2 is-family-secondary has-text-black">{post.title}</h1>
		</div>
		<div class="columns is-mobile">
			<div class="column is-6 has-text-centered">
				<h3 class="is-size-5 is-family-secondary">{post.author}</h3>
			</div>
			<div class="column is-6 has-text-centered">
				<button class="button is-medium is-light is-info">
					<span>{post.type}</span>
				</button>
			</div>

    </div>
</section>
<div class="image has-text-centered">
	<img alt={post.title} src={"https://backend.mednation.org"+processImage(post.image.path)} >
</div>
<section class="section">
	<div class="container">
		<div class="content">
			{@html post.body}
		</div>
	</div>
</section>