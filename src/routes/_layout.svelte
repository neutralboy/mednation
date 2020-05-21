<script>
    import Nav from '../components/nav.svelte';
    import "spectre.css/dist/spectre.css";
</script>

<style>
    :global(:root){
        --primary: #029ba3;
        --secondary: #203ec4;
        --font-primary: 'Lato', sans-serif;
        --font-secondary: 'Roboto Slab', serif;
        --font-brand: 'Comfortaa', serif;
    }
    :global(body){
        font-family: var(--font-primary);
    }
    :global(.font-secondary){
        font-family: var(--font-secondary);
    }
    :global(.container){
        padding-top: 3rem;
        padding-right: 1.5rem;
        padding-bottom: 3rem;
        padding-left: 1.5rem;
        max-width: 1152px;
        margin-right: 0.75rem;
        margin-left: 0.75rem;
    }
    :global(.is-primary){
        background-color: var(--primary);
    }
    :global(.is-secondary){
        background-color: var(--secondary);
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
    :global(.black){ color: black; }
    :global(.white){ color: white; }
    .margin-top{ margin-top: 3.4rem; }
</style>


<main>
    <Nav />
    <div class="margin-top">
	<slot></slot>
    </div>
</main>