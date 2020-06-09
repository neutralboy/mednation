<style lang="scss">
    @import "../main.scss";
    @import "bulma/sass/grid/columns.sass";
    $box-radius: 0px;
    @import "bulma/sass/form/shared.sass";
    @import "bulma/sass/form/input-textarea.sass";
    @import "bulma/sass/form/tools.sass";
    @import "bulma/sass/form/select.sass";
    .image{
        max-height: 20rem;
    }
</style>
<script>
    import Og from '../components/og.svelte';
    import Notification from '../components/notification.svelte';
    export let close;
    let success = false;

    let name = "";
    let phone = "";
    let email = "";
    let city = "";
    let college = "";

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
                    email: email,
                    college: college,
                    city: city
                }
            })
        }).then(r=>r.json()).then(r=>{
            console.log(r);
            success = true;
        })
    }

</script>

<Og title="Get Involved" />
<section class="section">
    <div class="container">
        <div class="header has-text-centered">
            <h1 class="is-size-3 is-family-secondary has-text-black">
                Are you ready to be a contributing author?
            </h1>
            <h2 class="is-size-5">
                Then fill in the details and we'll contact you.
            </h2>
        </div>
    <br>
        <div class="columns is-vcentered">
            <div class="column is-half-desktop is-full-mobile">
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
                            <label class="label">Email</label>
                            <div class="control">
                                <input bind:value={email} class="input" required type="email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">City</label>
                            <div class="control">
                                <input bind:value={city} class="input" required type="text">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">College</label>
                            <div class="control">
                                <input bind:value={college} class="input" required type="text">
                            </div>
                        </div>
                        <input class="button is-primary is-fullwidth" value="Submit" type="submit" >
                        <br>
                        <Notification open={true} type={"is-warning"} text="Please note we will contact you through Whatsapp." />
                    </form>
                    <Notification open={success} />
            </div>
            <div class="column is-half-desktop is-full-mobile has-text-centered">
                <img class="image" alt="A better world" src="https://res.cloudinary.com/poorna/image/upload/v1591543562/undraw_a_better_world_9xfd.svg" >
            </div>
        </div>




    </div>
</section>
