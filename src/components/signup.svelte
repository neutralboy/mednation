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
<script>
    import Notification from './notification.svelte';
    export let open = false;
    export let close;
    let success = false;

    let name = "";
    let phone = "";
    let skill = "";

    const formSubmit = e =>{
        e.preventDefault();
        console.log(` ${name} `);
        fetch("https://backend.mednation.org/api/forms/submit/ContactUs?token=account-b822f49ae6fb5c314ad1d5d7cfdf38",
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                form: {
                    name: name,
                    phone: phone,
                    skill: skill
                }
            })
        }).then(r=>r.json()).then(r=>{
            console.log(r);
            success = true;
        })
    }

</script>
<div class:is-active="{open}" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <h2 class="is-size-4 is-family-secondary has-text-black">Tell us what you can do and we'll reach out.</h2>
            <br>
            
            <form class:is-hidden={success} on:submit={formSubmit} >
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input bind:value={name} required class="input" type="text">
                    </div>
                </div>
                <div class="field has-addons">
                    <p class="control">
                        <button class="button is-static">
                            +91
                        </button>
                    </p>
                    <p class="control is-expanded">
                        <input bind:value={phone} required class="input" type="text" minlength="10">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Tell us what you can do</label>
                    <div class="control">
                        <input bind:value={skill} class="input" required type="text">
                    </div>
                </div>
                <input class="button is-primary is-fullwidth" value="Submit" type="submit" >
            </form>
            <Notification open={success} />
        </div>
    </div>
    <button on:click={close} class="modal-close is-large" aria-label="close"></button>
</div>