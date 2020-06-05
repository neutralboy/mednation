<script>
    import SignUp from './signup.svelte';
    let active = false;
    function activate(){
        active = !active;
    }
    let modal = false;
    function toggleModal(){
        modal = !modal;
    }
</script>

<style type="text/scss" >
    $navbar-background-color: rgb(250, 237, 237);
    $navbar-item-color: black;
    @import "../main.scss";
    $navbar-height: 3.6rem;
    @import "bulma/sass/components/navbar.sass";

    .navbar-brand{
        a{
            font-family: $family-brand;
        }
    }
    .icon{ max-height: 2rem; }
</style>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
        <a href="/" class="is-size-3 has-text-black has-text-weight-bold"><span class="has-text-primary">Med</span>nation</a>
    </div>

    <a on:click={activate} role="button" class="navbar-burger" class:is-active="{active}" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class:is-active="{active}" class="navbar-menu">
    <div class="navbar-end"> 
        <!-- NOT AN ESSENTIAL FEATURE UNTIL 10 COLLEGES -->
        <!-- <a href="/search" class="navbar-item">
            <img alt="search" class="icon" src="https://img.icons8.com/pastel-glyph/50/000000/search--v2.png"/>
        </a> --> 
        <a href="/review" class="navbar-item">
            College Reviews
        </a>
        <a href="/mentors" class="navbar-item">
            Mentors
        </a>
        <a class="navbar-item">
            Blog
        </a>
        <a class="navbar-item">
            Events
        </a>
        <div class="navbar-item">
            <button on:click={toggleModal} class="button is-primary"><b>Get Involved</b></button>
        </div>
    </div>
  </div>
</nav>

<div>
    <SignUp open={modal} close={toggleModal} />
</div>
