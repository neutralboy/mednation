<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(cards => {
      return { cards: cards };
    });
  }
</script>
<script>
    import Og from "../../components/og.svelte";
    export let cards;
        function processImage(img){
        if(img[0] != "/"){
            return "/"+img;
        }
        return img;
    }
</script>
<style lang="scss">
	@import "../main.scss";
    @import "bulma/sass/grid/columns.sass";
    @import "bulma/sass/elements/box.sass";
    .margin-bottom{
        margin-bottom: 2rem;
    }
    
</style>

<Og title="Medical Blog" url="review" />
<section class="section">
    <div class="container">
        <div class="header has-text-centered margin-bottom">
            <h1 class="is-size-2 is-family-secondary">Medical Blog</h1>
        </div>
            {#if cards.length == 0}
                <div class="content has-text-centered">
                    <p>You're here too early. Help us write an article. <a href="/get-involved">Click here</a></p>
                </div>
            {/if}
        <div class="columns is-multiline">



                {#each cards as { title, summary, author, slug, tags }}
                    <div class="column is-half-desktop is-full-mobile">
                        <a href={"/blog/"+slug}>
                            <div class="box">
                                <div>
                                    <h2 class="is-size-2 has-text-black is-family-secondary" >{title}</h2>
                                </div>
                                <p>{summary.substring(0, 80) + "..."}</p>
                                <br>
                                <div class="columns is-vcentered is-mobile">
                                    <div class="column is-6">
                                        {#each tags as tag}
                                            <button class="button is-primary is-light">{tag}</button>
                                        {/each}
                                    </div>
                                    <div class="column is-6">
                                        <p class="is-family-secondary">By {author}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                {/each}
        </div>

    </div>
</section>