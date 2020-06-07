<style lang="scss">
    @import "../main.scss";
    @import "bulma/sass/layout/footer.sass";
    @import "bulma/sass/grid/columns.sass";
    .copyright{
        border-top: 2px solid rgb(94, 94, 94);
        padding-top: 25px;
    }
    ul{
        list-style-type: none;
    }
</style>

<footer class=" footer has-text-centered  ">
        <div class="columns ">
            <div class=" column is-one-third-desktop is-full-mobile ">
                <h3 class="is-size-3 has-text-black has-text-weight-bold font-brand"><span class="has-text-primary">Med</span>nation</h3>
                <div>
                    <p class="is-family-secondary">A community of Med students.</p>
                </div>
            </div>
            <div class="column is-one-third-desktop is-full-mobile ">
                <ul>
                    <li><a href="/review">College Reviews</a></li>
                    <li><a href="/mentors">Mentoring</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <!-- <li><a href="/events">Events</a></li> -->
                </ul>
            </div>
            <div class="column is-one-third-desktop is-full-mobile ">
                <ul>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/meet-the-team">Meet the team</a></li>
                    <li><a rel="nofollow noreferrer" target="_blank" href="https://github.com/neutralboy/mednation">Github</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright has-text-centered is-family-secondary">
            <p>ALL RIGHTS RESERVED | MEDNATION | 2020-present</p>
        </div>
</footer>