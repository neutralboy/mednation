<script context="module">
    const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
    const domain = "https://backend.mednation.org";
	export async function preload() {
		const res = await this.fetch(domain+"/api/collections/get/reviews?token="+key, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                limit: 10,
                fields: {title: 1, rating: 1, state: 1, main_image: 1, main_body: 1, _id: 1}
            })
        });
        const r = await res.json();
		return { cards: r.entries };
	}
</script>
<script>
    import Og from "../components/og.svelte";
    import Card from "../components/card.svelte";
    export let cards;
</script>
<style lang="scss">
	@import "../main.scss";
    @import "bulma/sass/grid/columns.sass";
    .margin-bottom{
        margin-bottom: 2rem;
    }
</style>

<Og title="College Reviews" />
<section class="section">
    <div class="container">
        <div class="header has-text-centered margin-bottom">
            <h1 class="is-size-2 font-brand">College Reviews</h1>
        </div>
        <div class="columns is-multiline">
            <div class="column is-one-third-desktop is-full-mobile">
                {#each cards as { title, rating, state, main_image, main_body, _id }}
                    <Card
                        title={title}
                        rating={rating}
                        state={state}
                        image={main_image}
                        main_body={main_body}
                        link={_id}
                    />
                {/each}
            </div>
        </div>

    </div>
</section>