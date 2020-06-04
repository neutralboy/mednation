<script>
    export let title = "";
    export let image = "";
    export let rating = "";
    export let main_body = "";
    export let state = "";
    export let link = "";
    function processImage(img){
        if(img[0] != "/"){
            return "/"+img;
        }
        return img;
    }
</script>
<style lang="scss">
    @import "../main.scss";
	@import "bulma/sass/components/card.sass";
    @import "bulma/sass/elements/image.sass";
    @import "bulma/sass/components/level.sass";
    .rating{
        color: black;
        font-size: 0.8rem;
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
    .content{ font-size: 0.8rem; }
</style>

<a href={"/r/"+link}>
    <div class="card">
        <div class="card-image">
            <figure class="image is-2by1">
            <img src={"https://backend.mednation.org"+processImage(image.path)} alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-size-5 is-family-secondary has-text-black">{title}</p>
                </div>
            </div>
            <div class="content">
                {#if main_body.length > 80}
                    {main_body.substring(0, 80) + "..."}
                {:else}
                    {main_body}
                {/if}
            </div>
            <div class="level is-mobile">
                <div class="level-left">
                    <div class=" level-item rating has-text-centered">
                        <span class="value">{rating*2}</span>
                        <span class="total"> Out of 10</span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item has-text-centered">
                        <button class="button is-info is-light is-medium" >{state}</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</a>