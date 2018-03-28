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
                                img-src="https://lorempixel.com/1024/480/technics/4/"
              ></b-carousel-slide>
              <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
                  <h1>Hello world!</h1>
              </b-carousel-slide>
              <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
              </b-carousel-slide>
              <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                       src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
              </b-carousel-slide>
          </b-carousel>
      </div>

      <div class="pp-button-group">
          <b-button class="pp-button-menus">Nos menus</b-button>
          <b-button class="pp-button-sous-menus">Nos plats</b-button>
          <b-button class="pp-button-sous-menus">Nos boissons</b-button>
          <b-button class="pp-button-sous-menus">Nos desserts</b-button>
          <b-button class="pp-button-sous-menus">Composer ?</b-button>
      </div>

      <div>
          <b-button class="pp-button-commander">J'AI FAIM !</b-button>
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
    .pp-button-menus, .pp-button-sous-menus,.pp-button-commander{
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

    .pp-button-sous-menus{
        height : 80px;
        width : 48%;
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

</style>
