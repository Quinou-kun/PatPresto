<template>
  <div>
      <div class="pp-carousel">
          <b-carousel id="carousel1"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="4000"
                      img-width="1024"
                      img-height="480"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >
              <b-carousel-slide caption="Composer"
                                text="Composer votre propre plat facilement"
                                img-src="https://lorempixel.com/1024/480/technics/4/">
              </b-carousel-slide>
              <b-carousel-slide caption="Offre spéciale"
                                img-src="https://lorempixel.com/1024/480/technics/4/"
                                text="2 plats achetés, le 3ème à moitié prix !">
              </b-carousel-slide>
              <b-carousel-slide caption="Offre vraiment spéciale !!"
                                text="Seulement pour les étudiants"
                                img-src="https://lorempixel.com/1024/480/technics/8/">
              </b-carousel-slide>
              <b-carousel-slide caption="Livraison Offerte"
                                img-src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
              </b-carousel-slide>
          </b-carousel>
      </div>

      <div class="pp-button-group">
          <div class="pp-wrapper-menus">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzq8pUSMsZlvP45sOrraV9uB7ZbLAbu8SCtyniarmgGuRYEdqFLg">
            <b-button class="pp-button-menus">Nos menus</b-button>
          </div>
          <div class="pp-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52YVJdXlsUTnqJ1e6MQKseBA5UQEWj3npRxjAxrrQDsgXff9pyw">
            <b-button class="pp-button-sous-menus">Nos plats</b-button>
          </div>
          <div class="pp-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvbh0zkueTaiNoTHfQdc12pkdNPRc_jcVktiyJ8vdOckgegRfUg">
            <b-button class="pp-button-sous-menus">Nos boissons</b-button>
          </div>
          <div class="pp-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyQTIfswopCHSqPCc8vIcWL8r-TKfZQ3QrmZb-yCmBtZFlRqJQg">
            <b-button class="pp-button-sous-menus">Nos desserts</b-button>
          </div>
          <div class="pp-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfA9KQFOtkOiPWjGVFhZo64QmEOXubdZ1gSM8GQeL0x9NjniCOww">
            <b-button class="pp-button-sous-menus">Composer ?</b-button>
          </div>
      </div>

      <div>
          <router-link to="/hungry"><b-button class="pp-button-commander">J'AI FAIM !</b-button></router-link>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style>
    .pp-carousel{
        margin : 4px 0;
    }
    .pp-button-commander, .pp-wrapper, .pp-wrapper-menus{
        height : 100px;
        width : 98%;
        padding : 0;
        color : #EEB422;
        background-color : white;
        border: 2px solid #EEB422;
        margin-bottom : 6px;
    }

    .pp-button-group{
        text-align : center;
    }

    .pp-button-commander{
        height : 110px;
        width : 100%;
        margin : 0;
        position:fixed;
        bottom:0px;
        color : white;
        background-color : #EEB422;
    }

    .pp-button-sous-menus,.pp-button-menus {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      background-color: Transparent;
      color: black;
      font-size: 18px;
      font-weight: 900;
      padding: 25px 35px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
    }

    .pp-button-menus{
      padding: 30px 120px
    }

    .pp-wrapper img, .pp-wrapper-menus img {
      width: 100%;
      height: 100%;
      opacity:0.4;
    }

    .pp-wrapper-menus {
      display: inline-block;
      position: relative;
      height: 100px;
    }

    .pp-wrapper {
      display:inline-block;
      position: relative;
      height: 80px;
      width: 48%;

    }

</style>
