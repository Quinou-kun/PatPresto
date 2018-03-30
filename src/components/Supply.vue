<template>
  <div class="supply-container">
      <b-form-group
              label="Code Postal">
          <b-form-input
                  type="number"
                  v-model="form.code"
                  required
                  placeholder="ex: 54000">
          </b-form-input>
      </b-form-group>


      <SPAN v-if="form.code.length === 5"><icon scale="3" style="color : #eeb422" name="chevron-down"></icon></SPAN>

      <b-form-group v-if="form.code.length === 5"
              label="Adresse">
          <b-form-input
                  type="text"
                  v-model="form.location"
                  required
                  placeholder="Adresse">
          </b-form-input>
      </b-form-group>

      <SPAN v-if="form.location.length != 0 && form.code.length === 5"><icon scale="3" style="color : #eeb422" name="chevron-down"></icon></SPAN>


      <b-form-group v-if="form.location.length != 0 && form.code.length === 5"
                    label="Choisissez une heure estimée de livraison">
          <b-form-radio-group class="pp-radio" id="btnradios3"
                              buttons
                              stacked
                              v-model="selected"
                              :options="options"
                              name="radioBtnStacked" />
         </b-form-group>

      <router-link to="/hungry"><b-button class="pp-back"><icon scale="2" name="reply"></icon></b-button></router-link>


      <router-link v-if="form.location.length != 0 && form.code.length === 5 && selected != ''" to="/order"><b-button class="pp-validate"><icon scale="2" name="share"></icon></b-button></router-link>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'This is the Login page',
      form: {
        code: '',
        location: '',
        checked: []
      },
      selected: '',
      options: [
        { text: '18:30', value: '18:30' },
        { text: '18:44' , value: '18:44' },
        { text: '19:08', value: '19:08' },
      ]
    }
  }
}
</script>

<style>
    body{
        font-size : 1.2em;
    }
    .supply-container{
        text-align : center;
        width : 80%;
        padding-top : 20px;
        margin : auto;
    }
    .pp-radio{
        width : 100%;
    }
    label.btn.btn-secondary.active{
        background-color : red;
    }
    .pp-back{
        height : 60px;
        width : 80px;
        position:fixed;
        bottom:0px;
        left : 0px;
        background-color : lightgrey;
    }
    .pp-validate{
        height : 60px;
        width : 80px;
        position:fixed;
        bottom:0px;
        right : 0px;
        background-color : #EEB422;
    }
</style>
