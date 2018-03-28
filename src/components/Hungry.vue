<template>
  <div class="hungry-container">
      <b-button class="hungry-button">A emporter</b-button>
      <b-button class="hungry-button">Livraison</b-button>
      <router-link to="/"><b-button class="pp-back"><icon scale="2" name="reply"></icon></b-button></router-link>

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
    .hungry-container{
        padding-top : 65px;
        width : 80%;
        margin : auto;
    }
    .hungry-button{
        border : none;
        margin : 30px 0;
        width : 100%;
        height : 120px;
        background-color : #EEB422;
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
