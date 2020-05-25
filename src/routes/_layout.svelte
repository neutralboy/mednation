<script>
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';
</script>

<style type="text/scss" global >
    @import "../main.scss";
    .margin-top{
        margin-top: 3.6rem;
    }
</style>



<main>
    <Nav />
        <div class="margin-top">
            <slot></slot>
        </div>
    <Footer />
</main>