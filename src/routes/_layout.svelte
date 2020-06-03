<script>
    import Nav from '../components/nav.svelte';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Noto+Serif&family=Open+Sans&display=swap');
    :global(:root){
        --font-size-xxl: 3rem;
        --font-size-xl: 2.5rem;
        --font-size-l: 2rem;
        --font-size-m: 1rem;
        --font-size-s: 1.5rem;
        --font-size-xs: 1.25rem;
        --font-size-xxs: 0.75rem;
        --font-size: var(--font-size-m);


        --font-family-system: 'Open Sans', sans-serif;
        --font-family-sans-serif: 'Open Sans', sans-serif;
        --font-family-serif: 'Noto Serif', serif;
        --font-family: var(--font-family-system);
        --font-family-brand: 'Comfortaa', cursive;
        --body-font-family: var(--font-family-sans-serif);
        --primary: #118688;
        --secondary: #203ec4;
    }
    
    :global(.font-brand){
        font-family: var(--font-family-brand);
    }
    :global(.is-family-secondary){
        font-family: var(--font-family-serif);
    }
    :global(.is-vcentered){
        display: flex;
        align-items: center;
        justify-content: center;
    }
    :global(.has-text-centered){
        text-align: center;
    }
    :global(.has-background-primary){ background-color: var(--primary); }
    :global(.container){ padding: 2rem; }
    :global(.no-max-width){ max-width: 100%; }
    :global(body){ font-family: var(--font-family-sans-serif) }
    .margin-top{
        margin-top: 3.6rem;
    }
</style>



<main>
        <Nav />
        <div class="margin-top">
            <slot></slot>
        </div>
</main>