<template>
  <div class="login-container" style="text-align : center">
      <div><h3>Se connecter</h3></div>
      <div class="login-form">
          <b-form>
              <b-form-group
                            label="Adresse e-mail"
                            description="We'll never share your email with anyone else.">
                  <b-form-input
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="Enter email">
                  </b-form-input>
              </b-form-group>

              <b-form-group
                            label="Mot de passe">
                  <b-form-input
                                type="password"
                                v-model="form.password"
                                required
                                placeholder="Enter password">
                  </b-form-input>
              </b-form-group>
              <b-button class="login-button"> Se connecter !</b-button>
              <div><router-link to="/register"><a >Je n'ai pas encore de compte client</a></router-link></div>
          </b-form>
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
