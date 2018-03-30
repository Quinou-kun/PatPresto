<template>
  <div>
      <div style="text-align : center">
          <div class="progress-value">Mode<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Commande<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Paiement<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Préparation<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
      </div>
      <b-progress :value="59" variant="success" class="mb-2"></b-progress>

      <b-card style="width : 100%; text-align : center;" header="<h5><b>Récapitulatif de la commande</b></h5>">
          <b-card style="width : 100%; text-align : left;">
              <h6><b>Plat composé </b>x1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.00€</h6>
              <h5 style="float : right;"><b></b></h5>
          </b-card>

          <div style="margin-top : 20px; width : 100%;">
              <h3 style="float : right;"><b>Total : 8.00€</b></h3>
          </div>
      </b-card>

      <b-card style="width : 100%; text-align : center;" header="<h5><b>Choisissez votre mode de paiement</b></h5>">

          <b-button style="background-color : #eeb422; border : none;margin : 10px;"><icon scale="4" style="color : white;" name="cc-mastercard"></icon></b-button>
          <router-link to="/end"><b-button style="background-color : #eeb422; border : none;margin : 10px;"><icon scale="4" style="color : white;" name="cc-visa"></icon></b-button></router-link>
          <b-button style="background-color : #eeb422; border : none;margin : 10px;"><icon scale="4" style="color : white;" name="cc-paypal"></icon></b-button>
      </b-card>

      <router-link to="/order"><b-button class="pp-back"><icon scale="2" name="reply"></icon></b-button></router-link>


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
    .progress-value{
        display : inline-block;
        padding : 12px;
        font-size : 15px;
    }
    .pp-back{
        height : 60px;
        width : 80px;
        position:fixed;
        bottom:0px;
        left : 0px;
        background-color : lightgrey;
    }
</style>
