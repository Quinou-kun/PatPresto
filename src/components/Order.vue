<template>
  <div class="login-container" style="text-align : center">

      <div>
          <div class="progress-value">Mode<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Commande<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Paiement<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
          <div class="progress-value">Préparation<br><icon scale="1" style="color : #eeb422" name="chevron-down"></icon></div>
      </div>
      <b-progress :value="32" variant="success" class="mb-2"></b-progress>


      <div class="select-order">
          <b-form-group label="Faites votre choix">
              <b-form-radio-group id="btnradios1"
                                  buttons
                                  v-model="selected"
                                  :options="options"
                                  name="radiosBtnDefault" />
          </b-form-group>

      </div>
      <div v-if="selected === '1'">
          <b-card style="width : 80%; margin : auto" header="<b>Menu SOLO</b>">
              <b-list-group>
                  <b-list-group-item href="#">1 plat</b-list-group-item>
                  <b-list-group-item href="#">1 boisson</b-list-group-item>
                  <b-list-group-item href="#">1 dessert</b-list-group-item>
              </b-list-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card>
          <b-card style="width : 80%; margin : auto" header="<b>Menu DUO</b>">
              <b-list-group>
                  <b-list-group-item href="#">2 plat</b-list-group-item>
                  <b-list-group-item href="#">1 grande boisson</b-list-group-item>
                  <b-list-group-item href="#">1 maxi dessert</b-list-group-item>
              </b-list-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card>
          <b-card style="width : 80%; margin : auto" header="<b>Menu MAXI</b>">
              <b-list-group>
                  <b-list-group-item href="#">1 plat XXL</b-list-group-item>
                  <b-list-group-item href="#">1 grande boisson</b-list-group-item>
                  <b-list-group-item href="#">1 maxi dessert</b-list-group-item>
              </b-list-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card>
      </div>
      <div v-if="selected === '2'">
          desserts
      </div>
      <div v-if="selected === '3'">
          boissons
      </div>
      <div v-if="selected === '4'">
          composer
      </div>

      <router-link to="/supply"><b-button class="pp-back"><icon scale="2" name="reply"></icon></b-button></router-link>

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
      selected: '1',
      options: [
        { text: 'Menus', value: '1' },
        { text: 'Desserts', value: '2'},
        { text: 'Boissons', value: '3' },
        { text: 'Composer', value: '4' }
      ]
    }
  }
}
</script>

<style>
    .select-order{
        width : 100%;
        margin-top : 10px;
        font-size : 19px;
    }

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
