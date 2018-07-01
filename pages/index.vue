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
          <b-col sm="5">
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
    top: calc(30% - 6em);
    right:10vw;
    position: absolute;
  }

  .menu-item {
    display: inline-block;
    margin: 10px;
    border: 2px solid;
    padding: 50px;
    box-shadow: 1px 2px 1px;
  }

</style>
