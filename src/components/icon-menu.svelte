<style lang="scss">
    @import "../main.scss";
    @import "bulma/sass/grid/columns.sass";
    @import "bulma/sass/elements/box.sass";
    @import "bulma/sass/elements/icon.sass";
</style>
<script>
    export let slug = "";
</script>
<div class="box">
    <div class="columns is-mobile is-multiline">
        <div class="column is-4">
            <a href={"/"+slug+"#campus"} class="button is-large">
                <span class="icon is-large">
                    <img alt="student" src="https://img.icons8.com/dusk/64/000000/student-center.png"/>
                </span>
            </a>
            <p>Campus</p>
        </div>
        <div class="column is-4">
            <a href={"/"+slug+"#hostel"} class="button is-large">
                <span class="icon is-large">
                    <img alt="hostel" src="https://img.icons8.com/dusk/64/000000/3-star-hotel.png"/>
                </span>
            </a>
            <p>Hostel</p>
        </div>
        <div class="column is-4">
            <a href={"/"+slug+"#safety"} class="button is-large">
                <span class="icon is-large">
                    <img alt="safety" src="https://img.icons8.com/cotton/64/000000/safety-vest-1.png"/>
                </span>
            </a>
            <p>Safety</p>
        </div>
        <div  class="column is-4">
            <a href={"/"+slug+"#transport"} class="button is-large">
                <span class="icon is-large">
                    <img alt="transport" src="https://img.icons8.com/dusk/50/000000/bus.png"/>
                </span>
            </a>
            <p>Transport</p>
        </div>
        <div class="column is-4">
            <a href={"/"+slug+"#comp"} class="button is-large">
                <span class="icon is-large">
                    <img alt="trophy" src="https://img.icons8.com/dusk/50/000000/trophy.png"/>
                </span>
            </a>
            <p>Competitions</p>
        </div>
        <div class="column is-4">
            <a href="#lifestyle" class="button is-large">
                <span class="icon is-large">
                    <img alt="party" src="https://img.icons8.com/dusk/50/000000/dancing-party.png"/>
                </span>
            </a>
            <p>Lifestyle</p>
        </div>
    </div>
</div>