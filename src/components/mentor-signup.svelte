<script>
    import Notification from './notification.svelte';
    export let open;
    export let close;
    let success = false;
</script>
<style lang="scss" >
    @import "../main.scss";
    @import "bulma/sass/components/modal.sass";
    @import "bulma/sass/elements/box.sass";
    $box-radius: 0px;
    @import "bulma/sass/form/shared.sass";
    @import "bulma/sass/form/input-textarea.sass";
    @import "bulma/sass/form/tools.sass";
    @import "bulma/sass/form/select.sass";
    .margin-bottom{ margin-bottom: 2rem; }
</style>
<div class:is-active="{open}" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <div class="has-text-centered margin-bottom">
                <h2 class="is-size-3 is-family-secondary">Sign up and we'll reach out to you.</h2>
            </div>
            <form class="margin-bottom">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input required class="input" type="text">
                    </div>
                </div>
                <div class="field has-addons">
                    <p class="control">
                        <button class="button is-static">
                            +91
                        </button>
                    </p>
                    <p class="control is-expanded">
                        <input required class="input" type="text" minlength="10">
                    </p>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Course</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                        <div class="control is-fullwidth">
                            <div class="select is-fullwidth">
                            <select>
                                <option value="NEET">NEET PG</option>
                                <option value="USMLE" >USMLE</option>
                                <option value="PLAB" >PLAB</option>
                            </select>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <input class="button is-primary is-fullwidth" value="Submit" type="submit" >
            </form>
            <Notification open={true} type="is-danger" text={"Disclaimer: The evaluation of sign ups are subject to availability of mentoring slots."} />

        </div>
    </div>
    <button on:click={close} class="modal-close is-large" aria-label="close"></button>
</div>