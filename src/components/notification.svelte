<script>
    export let open;
    export let type = "is-success";
    export let text = "Thank you. Your form has been submitted.";
</script>
<style lang="scss">
    @import "../main.scss";
    $notification-radius: 0px;
    @import "bulma/sass/elements/notification.sass";
</style>
<div class:is-hidden="{!open}" class="notification {type} has-text-centered is-light">
    {text}
</div>