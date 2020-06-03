<script>
    import Success from './success.svelte';
    export let open = false;
    export let close;
    let success = false;
</script>
<style lang="scss">
    @import "../main.scss";
    @import "bulma/sass/components/modal.sass";
    @import "bulma/sass/elements/box.sass";
    $box-radius: 0px;
    @import "bulma/sass/form/shared.sass";
    @import "bulma/sass/form/input-textarea.sass";
    @import "bulma/sass/form/tools.sass";
    @import "bulma/sass/form/select.sass";
</style>
<div class:is-active="{open}" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <h2 class="is-size-4 is-family-secondary has-text-black">Tell us what you can do and we'll reach out.</h2>
            <br>
            <form>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input required class="input" type="text">
                    </div>
                </div>
                <div class="field has-addons">
                    <p class="control">
                        <a class="button is-static">
                            +91
                        </a>
                    </p>
                    <p class="control is-expanded">
                        <input required class="input" type="text" minlength="10">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Tell us what you can do</label>
                    <div class="control">
                        <input class="input" required type="text">
                    </div>
                </div>
                <input class="button is-primary is-fullwidth" value="Submit" type="submit" >
            </form>
            <Success open={success} />

        </div>
    </div>
    <button on:click={close} class="modal-close is-large" aria-label="close"></button>
</div>