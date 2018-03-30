<template>
  <div>
      <div style="text-align : center">
          <div class="progress-value">Mode<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Commande<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Paiement<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Préparation<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
      </div>
      <b-progress :value="85" variant="success" class="mb-2"></b-progress>

      <div style="width : 100%;text-align: center;margin-top : 75px;">
          <p>Votre commande est en cours de préparation et devrait être prête et livrée à votre domicile pour 19h08 ! </p>
          <p>Merci d'avoir choisi Pat'Presto pour votre repas et à bientôt !</p>
          <icon scale="5" style="color : grey; width : 100%" name="smile-o"></icon>
          <router-link to="/r"><b-button style="vertical-align : middle; margin-top : 20px;background-color : #eeb422;border : none;font-size : 1.3em;"><icon style="vertical-align : middle; margin : 10px;" scale="2" name="home"></icon>Retourner à l'accueil</b-button></router-link>

      </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'This is the Login page',
      form: {
        email: '',
        name: '',
        checked: []
      },
    }
  }
}
</script>

<style>
    .login-container{
        border : 2px solid #EEb422;
        width : 85%;
        border-radius : 5px;
        margin : auto;
        padding : 5%;
        margin-top : 40px;
    }

    .login-button{
        background-color : #eeb422;
        border : none;
        height : 60px;
        width : 80%;
        margin-bottom : 15px;
    }
</style>
