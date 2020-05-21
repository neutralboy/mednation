<style>
.navbar{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: var(--primary);
    min-height: 3.4rem;
    overflow: hidden;
}
.navbar-section{
    opacity: 1;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
}
.navbar-brand{
    margin-top: 0.4rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-family: var(--font-brand);
}
.navbar-section > a{
    display: block;
    font-size: 1rem;
    text-decoration: none;
    color: rgb(32, 32, 32);
    padding-top: 1rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    height: 100%;
    text-align: center;
}
.navbar-section a:hover{
    background-color: #028e96;
}
.align-menu{
    display: block
}
.icon-holder{
    position: relative;
    float: right;
    margin-top: 0.8rem;
}
</style>

<nav class="navbar">
  <section class="navbar-section align-menu">
    <span href="/" class="navbar-brand mr-2 black"><span class="white">Med</span>nation</span>
    <button class="icon-holder show-sm">
        <i class="icon icon-2x icon-menu"></i>
    </button>
  </section>
  <section class="navbar-section hide-sm">
    <a href="/colleges">Colleges</a>
    <a href="/blog">Medi Blog</a>
    <a href="/usmle" class="btn btn-link">USMLE</a>
    <div>
        <a class="btn btn-success btn-lg" href="/contact-us">Contact Us</a>
    </div>
    
  </section>
</nav>
