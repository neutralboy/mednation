<script>
    export let open;
    export let text = "Thank you. Your form has been submitted.";
</script>
<style lang="scss">
    @import "../main.scss";
    $notification-radius: 0px;
    @import "bulma/sass/elements/notification.sass";
</style>
<div class:is-hidden="{!open}" class="notification is-success has-text-centered">
    {text}
</div>