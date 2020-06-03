<script context="module" >
    const key = "account-b822f49ae6fb5c314ad1d5d7cfdf38"
    const domain = "https://backend.mednation.org";
	export async function preload(page, session) {
		const res = await this.fetch(domain+"/api/collections/get/usmle?token="+key);
        const r = await res.json();
		return { users: r.entries };
	}
</script>
<script>
    import Og from '../components/og.svelte';
    export let users;
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
	@import "bulma/sass/components/card.sass";
    .margin-bottom{ margin-bottom: 2rem; }
    .title{
        display: inline;
        border-bottom: 2px solid $primary;
    }
</style>

<Og title="Mentoring" />
<section class="section">
    <div class="container">

        <div class="has-text-centered margin-bottom">
            <h1 class="is-size-2 is-family-secondary has-text-dark">Meet the Mentors</h1>
        </div>

        <div class="columns is-multiline">

{#each users as { name, image, description, type }}
            <div class="column is-one-quarter-desktop is-full-mobile">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src={"https://backend.mednation.org"+processImage(image.path)} alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-size-4 is-family-secondary">{name}</p>
                            </div>
                        </div>
                        <div class="content">
                            {description}
                        </div>
                        <button class:is-primary="{type=='USMLE'}" class:is-success="{type=='PLAB'}" class:is-danger="{type=='NEET'}" class="button is-rounded">{type}</button>
                    </div>
                </div>
            </div>
{/each}


        </div>

    </div>
</section>