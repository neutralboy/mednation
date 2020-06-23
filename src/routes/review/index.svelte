<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`review.json`).then(r => r.json()).then(cards => {
      return { cards: cards };
    });
  }
</script>
<script>
    import Og from "../../components/og.svelte";
    import Card from "../../components/card.svelte";
    export let cards;
</script>
<style lang="scss">
	@import "../main.scss";
    @import "bulma/sass/grid/columns.sass";
    .margin-bottom{
        margin-bottom: 2rem;
    }
</style>

<Og title="College Reviews" url="review" />
<section class="section">
    <div class="container">
        <div class="header has-text-centered margin-bottom">
            <h1 class="is-size-2 is-family-secondary">College Reviews</h1>
        </div>
        <div class="columns is-multiline">
            
                {#each cards as { title, rating, state, image, summary, slug }}
                    <div class="column is-one-third-desktop is-full-mobile">
                        <Card
                            title={title}
                            rating={rating}
                            state={state}
                            image={image}
                            main_body={summary}
                            link={slug}
                        />
                    </div>
                {/each}
        </div>

    </div>
</section>