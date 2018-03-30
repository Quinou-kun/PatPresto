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
          <b-card style="width : 80%; margin : auto" header="<b>Menu SOLO  | 8.50 €</b>">
              <b-list-group>
                  <b-list-group-item href="#">1 plat</b-list-group-item>
                  <b-list-group-item href="#">1 boisson</b-list-group-item>
                  <b-list-group-item href="#">1 dessert</b-list-group-item>
              </b-list-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card>
          <b-card style="width : 80%; margin : auto" header="<b>Menu DUO  | 14.50 €</b>">
              <b-list-group>
                  <b-list-group-item href="#">2 plat</b-list-group-item>
                  <b-list-group-item href="#">1 grande boisson</b-list-group-item>
                  <b-list-group-item href="#">1 maxi dessert</b-list-group-item>
              </b-list-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card>
          <b-card style="width : 80%; margin : auto" header="<b>Menu MAXI | 11.50 €</b>">
              <b-list-group>
                  <b-list-group-item href="#">1 plat XXL</b-list-group-item>
                  <b-list-group-item href="#">1 grande boisson</b-list-group-item>
                  <b-list-group-item href="#">1 maxi dessert</b-list-group-item>
              </b-list-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card>
      </div>
      <div v-if="selected === '2'">
          <b-card style="width : 60%; margin : auto" header="<b>Cookie | 2 €</b>">
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
          <b-card style="width : 60%; margin : auto" header="<b>Tarte au citron | 2.50 €</b>">
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
          <b-card style="width : 60%; margin : auto" header="<b>Muffin Myrtille | 2 €</b>">
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
      </div>
      <div v-if="selected === '3'">
          <b-card style="width : 60%; margin : auto" header="<b>Coca Cola</b>">
              <b-form-group>
                  <b-form-radio-group>
                      <b-form-radio style="width : 100%; margin : 7px 5px">33 cl (1.50 €)</b-form-radio>
                      <b-form-radio style="width : 100%; margin : 7px 5px">1 l (2.50 €)</b-form-radio>
                  </b-form-radio-group>
              </b-form-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
          <b-card style="width : 60%; margin : auto" header="<b>Orangina</b>">
              <b-form-group>
                  <b-form-radio-group>
                      <b-form-radio style="width : 100%; margin : 7px 5px">33 cl (1.50 €)</b-form-radio>
                      <b-form-radio style="width : 100%; margin : 7px 5px">1 l (2.50 €)</b-form-radio>
                  </b-form-radio-group>
              </b-form-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
          <b-card style="width : 60%; margin : auto" header="<b>Iced Tea</b>">
              <b-form-group>
                  <b-form-radio-group>
                      <b-form-radio style="width : 100%; margin : 7px 5px">33 cl (1.50 €)</b-form-radio>
                      <b-form-radio style="width : 100%; margin : 7px 5px">1 l (2.50 €)</b-form-radio>
                  </b-form-radio-group>
              </b-form-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
          <b-card style="width : 60%; margin : auto" header="<b>Vittel</b>">
              <b-form-group>
                  <b-form-radio-group>
                      <b-form-radio style="width : 100%; margin : 7px 5px">33 cl (0.90 €)</b-form-radio>
                      <b-form-radio style="width : 100%; margin : 7px 5px">1 l (1.50 €)</b-form-radio>
                  </b-form-radio-group>
              </b-form-group>
              <b-button style="width : 100%;background-color : #eeb422;color : white;"><icon scale="1.2" name='cart-arrow-down'></icon></b-button>
          </b-card><br>
      </div>
      <div v-if="selected === '4'">
          <p>Nos plats composés ont un prix unique de <b>8.00€</b></p>
          <div v-if="selectedStep == 1" style="margin-top : 10px;">
              <b-button @click="setSelectedStep(1)" style="border-radius : 50%;border : none;background-color : cornflowerblue">1</b-button>
              <div style="height : 2px;display : inline-block;background-color: #eeb422;width : 75px;"></div>
              <b-button @click="setSelectedStep(2)" style="border-radius : 50%; background-color : #eeb422;color : white;border : none">2</b-button>
              <div style="height : 2px;display : inline-block;background-color: #eeb422;width : 75px;"></div>
              <b-button @click="setSelectedStep(3)" style="border-radius : 50%;background-color : #eeb422;color : white;border : none">3</b-button>
              <div v-if="farfalles == 1" style="margin-left : 10px;text-align : left; width : 20%;font-size : 0.8em;">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Farfalles
              </div>

              <h5 style="margin-top : 15px;">Choisissez votre base</h5>
              <b-button @click="setFarfalles()" style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Farfalles</b-button>
              <b-button style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Coquillettes</b-button>
              <b-button style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Spaghettis</b-button>
              <b-button style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Riz basmati</b-button>


              <b-button @click="setSelectedStep(2)" v-if="farfalles == 1" class="pp-validate">Valider ma base</b-button>

          </div>

          <div v-if="selectedStep == 2" style="margin-top : 10px;">
              <div>
              <b-button @click="setSelectedStep(1)" style="border-radius : 50%;border : none;background-color : forestgreen">1</b-button>
              <div style="height : 2px;display : inline-block;background-color: forestgreen;width : 75px;"></div>
              <b-button @click="setSelectedStep(2)" style="border-radius : 50%; background-color : cornflowerblue;color : white;border : none">2</b-button>
              <div style="height : 2px;display : inline-block;background-color: #eeb422;width : 75px;"></div>
              <b-button @click="setSelectedStep(3)" style="border-radius : 50%;background-color : #eeb422;color : white;border : none">3</b-button>
              </div>
              <div style="text-align : left; float : left; font-size : 0.8em;display : inline-block">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Farfalles
              </div>
              <div v-if="creme == 1" style="text-align : left; float : left; font-size : 0.8em;display : inline-block">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crème fraiche
              </div>
            <div>
                <br>
              <h5 style="margin-top : 15px;">Choisissez votre sauce</h5>
                <b-button @click="setCreme()" style="width : 35%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Crème Faîche</b-button>
                <b-button style="width : 35%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Tomate, basilic</b-button>
                <b-button style="width : 35%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Sauce au poivre</b-button>
                <b-button style="width : 35%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Bolognaise</b-button>

                <b-button @click="setSelectedStep(3)" v-if="creme == 1" class="pp-validate">Valider ma sauce</b-button>
            </div>
          </div>

          <div v-if="selectedStep == 3" style="margin-top : 10px;">
              <div>
              <b-button @click="setSelectedStep(1)" style="border-radius : 50%;border : none;background-color : forestgreen">1</b-button>
              <div style="height : 2px;display : inline-block;background-color: forestgreen;width : 75px;"></div>
              <b-button @click="setSelectedStep(2)" style="border-radius : 50%; background-color : forestgreen;color : white;border : none">2</b-button>
              <div style="height : 2px;display : inline-block;background-color: forestgreen;width : 75px;"></div>
              <b-button @click="setSelectedStep(3)" style="border-radius : 50%;background-color : cornflowerblue;color : white;border : none">3</b-button>
              </div>
              <div style="text-align : left; float : left; font-size : 0.8em;display : inline-block">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Farfalles
              </div>
              <div style="text-align : left; float : left; font-size : 0.8em;display : inline-block">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Crème fraiche
              </div>
              <div style="float : left; font-size : 0.8em;display : inline-block; text-align : center;">
                  <p v-if="lardons == 1" style="margin: 0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lardons</p>
                  <p v-if="oignons == 1" style="margin: 0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oignons</p>
                  <p v-if="emmental == 1" style="margin: 0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emmental</p>
                  <p v-if="champignons == 1" style="margin: 0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Champignons</p><br>
              </div>
              <br>
              <h5 style="margin-top : 15px;">
                  Choisissez vos ingrédients (encore {{number}})</h5>
              <b-button @click="setLardons()" style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Lardons</b-button>
              <b-button @click="setOignons()" style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Oignons</b-button>
              <b-button @click="setEmmental()" style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Emmental</b-button>
              <b-button @click="setChampignons()" style="width : 30%;padding : 8px; height : 90px;margin : 5px;background-color : #eeb422;color : white">Champignons</b-button>

              <b-button v-b-modal.modal1 v-if="lardons == 1 || oignons == 1 || emmental ==1 || champignons == 1" class="pp-validate">Ajouter au panier</b-button>

          </div>

      </div>

      <router-link to="/supply"><b-button class="pp-back"><icon scale="2" name="reply"></icon></b-button></router-link>


      <b-modal hide-footer id="modal1" title="Votre panier">
          <b-card style="width : 100%; text-align : left;" header="<h5><b>Plat composé </b>x1</h5>">
              <h6><b>Base</b> : Farfalles</h6>
              <h6><b>Sauce</b> : Crème fraîche</h6>
              <h6><b>Ingrédients </b>: Lardons <b>|</b> Oignons <b>|</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emmental <b>| </b>Champignons</h6><br><br>
              <h4 style="float : right;"><b>8.00€</b></h4>
          </b-card>

          <hr>
          <div style="margin-top : 20px; width : 100%;">
              <h3 style="float : right;"><b>Total : 8.00€</b></h3>
          </div>
          <div>
              <router-link to="/validate"><b-button style="height : 75px; margin-top : 15px;width : 100%;background-color : forestgreen;color : white;display : inline-block;">
              <icon scale="2" style="vertical-align : middle;color : white; margin-right : 15px;" name="credit-card"></icon>
              Valider et payer</b-button></router-link>
          </div>

      </b-modal>

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
      ],
      selectedStep : 1,
      farfalles : 0,
      creme : 0,
      lardons: 0,
      oignons: 0,
      emmental: 0,
      champignons: 0,
      number : 4
    }
  },
  methods :{
    setSelectedStep(step){
      this.selectedStep = step;
    },
    setFarfalles(){
      this.farfalles = 1;
    },
    setCreme(){
      this.creme = 1;
    },
    setLardons(){
      if (this.number > 0 && this.lardons === 0){
        this.number -= 1;
      }
      this.lardons = 1;
    },
    setOignons(){
      if (this.number > 0 && this.oignons === 0){
        this.number -= 1;
      }
      this.oignons = 1;
    },
    setEmmental(){
      if (this.number > 0 && this.emmental === 0){
        this.number -= 1;
      }
      this.emmental = 1;
    },
    setChampignons(){
      if (this.number > 0 && this.champignons === 0){
        this.number -= 1;
      }
      this.champignons = 1;
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
    .pp-validate{
        height : 60px;
        position:fixed;
        bottom:0px;
        right : 0px;
        background-color : forestgreen;
    }

</style>
