<script>
    export let title;
    export let content;
    let open = false;
    function toggle(){
        open = !open;
    }
</script>
<style>
    .content{ margin-top: 1.6rem; }
</style>
<div class="accordion">
    <button class:is-primary="{open}" on:click={toggle} class="button is-medium is-fullwidth">
        <span>{title}</span>
        <span class="icon is-medium">
            <img alt="chevorn_bottom" src="https://img.icons8.com/fluent/48/000000/chevron-down.png"/>
        </span>
    </button>
    <div class:is-hidden="{!open}" class="content">
        {@html content}
    </div>
</div>