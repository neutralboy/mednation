<script context="module" >
  export function preload({ params, query }) {
    return this.fetch(`mentors.json`).then(r => r.json()).then(cards => {
      return { cards: cards };
    });
  }
</script>
<script>
    import MentorSignUp from '../../components/mentor-signup.svelte';
    import Og from '../../components/og.svelte';
    export let users;
    export let cards;
    let open = false;
    function toggle(){
        open = !open;
    }
</script>
<style lang="scss">
	@import "../../main.scss";
	@import "bulma/sass/grid/columns.sass";
	@import "bulma/sass/components/card.sass";
    @import "bulma/sass/elements/image.sass";
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

{#each cards as { name, image, description, type }}
            <div class="column is-one-third-desktop is-full-mobile">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src={image} alt={name}>
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
                        <button class:is-primary="{type=='USMLE'}" class:is-success="{type=='PLAB'}" class:is-info="{type=='NEET-PG'}" class="button is-rounded is-medium">{type}</button>
                    </div>
                </div>
            </div>
{/each}


        </div>

    <button on:click={toggle} class="button is-fullwidth is-warning is-medium is-family-secondary">Sign Up</button>
    <MentorSignUp open={open} close={toggle} />
    </div>
</section>