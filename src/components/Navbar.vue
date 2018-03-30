<template>
  <div>
      <b-navbar toggleable="md">
          <b-navbar-toggle target="nav_collapse" style="border-color : #EEB422; border-width : 2px;"></b-navbar-toggle>
              <img v-if="$route.path !== '/order'" class="logo" src="../assets/logo.png"/>
          <b-button v-else style="background-color : #eeb422; border : none;" v-b-modal.modal2><icon scale="2" style="color : white;vertical-align : middle;" name="shopping-cart"></icon>
              <b-badge variant="light">0</b-badge></b-button>
          <b-collapse is-nav id="nav_collapse">
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                  <b-nav-item to="/" style="border-bottom : 1px solid #EEB422">Accueil</b-nav-item>
                  <b-nav-item to="/login">Me connecter</b-nav-item>
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
      <b-modal hide-footer id="modal2" title="Votre panier">
          <div>
              <p>Vous n'avez pas encore fait votre choix, votre panier est vide.</p>
          </div>
          <div>
              <router-link to="/validate"><b-button  disabled   style="height : 75px; margin-top : 15px;width : 100%;background-color : grey;color : white;display : inline-block;">
                  <icon scale="2" style="vertical-align : middle;color : white; margin-right : 15px;" name="credit-card"></icon>
                  Valider et payer</b-button></router-link>
          </div>

      </b-modal>

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
