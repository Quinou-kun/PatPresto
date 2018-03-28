<template>
  <div>
      <b-navbar toggleable="md">
          <b-navbar-toggle target="nav_collapse" style="border-color : #EEB422; border-width : 2px;"></b-navbar-toggle>
              <img class="logo" src="../assets/logo.png"/>
          <b-collapse is-nav id="nav_collapse">
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                  <b-nav-item to="/" style="border-bottom : 1px solid #EEB422">Accueil</b-nav-item>
                  <b-nav-item to="/login">Me connecter</b-nav-item>
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'This is the Navbar'
    }
  }
}
</script>

<style>
    .navbar{
        font-size : 1.2em;
        text-align : center;
        border-bottom : 2px solid #EEB422;
        border-radius : 0 0 20px 20px;
        background-color : white;
    }
    .logo{
        width : 25%;
    }
</style>
