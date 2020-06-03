<style>
    nav{
        position: sticky;
        top:0;
        background-color: #cbe8e9;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        width: 100%;
    }
    nav .right {
        float: right;
        font-family: var(--font-family-serif);
    }
    .brand{
        text-decoration: none;
        font-family: var(--font-family-brand);
        color: black;
        font-weight: bold;
        font-size: 1.2rem;
    }
    li{
        align-items: center;
        justify-content: center;
        margin: 0;
        border: 0;
    }
    .right > a:hover{
        background-color: var(--primary);
        color: white;
    }
    nav ul li a {
        text-decoration: none;
        display: block;
        text-align:center;
        height: 100%;
        padding: 1rem;
    }
    .menu-icon{
        max-height: 1.4rem;
    }
    .right .button{
        margin-top: 0.6rem
    }
</style>

<nav class="nav-inline">
    <ul>
        <li>
            <a href="/" class="brand">Mednation</a>
        </li>


        <li class="right show-xs">
            <button class="button button-square button-icon">
                <img class="menu-icon" alt="menu" src="https://img.icons8.com/ios-filled/50/000000/menu.png"/>
            </button>
        </li>

        <li class="right hide-xs">
            <button class="button">Get Involved</button>
        </li>
        <li class="right hide-xs">
            <a href="/usmle">USMLE</a>
        </li>
        <li class="right hide-xs">
            <a href="/blog">Blog</a>
        </li>
        <li class="right hide-xs">
            <a href="/events">Events</a>
        </li>
        <li class="right hide-xs">
            <a href="/reviews">Reviews</a>
        </li>
    </ul>
</nav>