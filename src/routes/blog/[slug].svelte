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
<Og url={"blog/"+slug} title={post.title.iv} description={post.summary.iv.substring(0, 80) + "..."} />
<section class="section">
    <div class="container is-fluid">

		<div class="header has-text-centered">
			<h1 class="is-size-2 is-family-secondary has-text-black">{post.title.iv}</h1>
		</div>
		<div class="columns is-mobile">
			<div class="column is-6 has-text-centered">
				<h3 class="is-size-5 is-family-secondary">By {post.author.iv}</h3>
			</div>
			<div class="column is-6 has-text-centered">
				{#each post.tags.iv as tag}
					<button class="button is-medium is-light is-info">
						<span>{tag}</span>
					</button>
				{/each}
			</div>

    </div>
</section>
<section class="section">
	<div class="container">
		<div class="content">
			{@html post.content.iv}
		</div>
	</div>
</section>