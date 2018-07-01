<template>
  <div>
    <b-container fluid class="center-home-dev">
      <div class="intro">
        <div class="typewriter">
          <p class="font-one">HELLO</p>
        </div>
        <div class="">
          <p class="font-two">I'M Dinushanka</p>
        </div>
        <div class="">
          <o class="font-three">a FullStack Engineer</o>
        </div>
      </div>

      <b-container class="menu">
        <b-row>
          <b-col sm="6">
          </b-col>
          <b-col>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
            <div class="menu-item">works</div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>


  </div>
</template>

<script>

  export default {
    components: {},
    computed: {},
    mounted() {

    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style type="scss">

  .center-home-dev {
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  .intro {
    top: calc(50% - 6em);
    left:10vw;
    position: absolute;
  }

  .menu {
    top: calc(35% - 6em);
    position: absolute;
  }

  .menu-item {
    display: inline-block;
    margin: 10px;
    border: 2px solid;
    padding: 50px;
    box-shadow: 1px 2px 1px;
  }


  /*
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 990px) and (max-width: 1200px) {

    .menu-item {
      margin: 10px;
      padding: 40px;
    }

    .menu {
      top: calc(40% - 6em);
    }


  }

  @media (min-width: 770px) and (max-width: 990px) {

    .menu-item {
      margin: 4px;
      padding: 30px;
    }

    .menu {
      top: calc(40% - 6em);
    }

  }
  /*
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 0px) and (max-width: 770px){

    .menu {
      top: calc(80% - 6em);
    }

  }

  /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {


  }

  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

  @media (min-width: 320px) and (max-width: 480px) {


  }


</style>
