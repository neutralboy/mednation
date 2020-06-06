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
            <h1 class="is-size-2 font-brand">Medical Blog</h1>
        </div>
        <div class="columns is-multiline">
            
                {#each cards as { title, summary, _created, author, _id, type, image }}
                    <div class="column is-half-desktop is-full-mobile">
                        <a href={"/blog/"+_id}>
                            <div class="box">
                                <div class="columns is-vcentered">
                                    <div class="column is-one-third-desktop is-full-mobile">
                                        <img src={"https://backend.mednation.org"+processImage(image.path)} alt={title}>
                                    </div>
                                    <div class="column is-two-thirds-desktop is-full-mobile">
                                        <h2 class="is-size-2 has-text-black is-family-secondary" >{title}</h2>
                                    </div>
                                </div>
                                <p>{summary.substring(0, 80) + "..."}</p>
                                <br>
                                <div class="columns is-vcentered is-mobile">
                                    <div class="column is-6">
                                        <button class="button is-primary is-light is-medium">{type}</button>
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