<template>
  <div class="no-gutters container-wrap">
    <div class="menu container-wrap">
      <div class="wrapper">
        <div>
          <div class="intro">
            <div>
              <div class="typewriter">
                <div>
                  <p class="font-one">HELLO</p>
                </div>
              </div>
            </div>
            <div>
              <div class="name-wrap">
                <p class="font-two" style="max-width: 100%">I'M Dinushanka</p>
              </div>
            </div>
            <div>
              <div class="">
                <o class="font-three">a FullStack Engineer</o>
              </div>
            </div>
          </div>
        </div>
        <div class="works-wrapper">
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
          <div class="menu-item">works</div>
        </div>
      </div>
    </div>
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

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  .works-wrapper {
    left: 0;
    right: 0;
    text-align: center;
  }

  .menu-item {
    display: inline-block;
    margin: 10px;
    border: 2px solid;
    padding: 50px;
    box-shadow: 1px 2px 1px;
  }

  .intro {
    left: 0;
    right: 0;
    display: block;
    text-align: center;
  }

  .name-wrap {
    display: inline-block;
  }

  @media(min-width: 700px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

  }
  /*.menu {*/
  /*top: calc(35% - 6em);*/
  /*position: absolute;*/
  /*}*/

  /*.menu-item {*/
  /*display: inline-block;*/
  /*margin: 10px;*/
  /*border: 2px solid;*/
  /*padding: 50px;*/
  /*box-shadow: 1px 2px 1px;*/
  /*}*/

  /*
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  /*@media (min-width: 990px) and (max-width: 1200px) {*/

  /*.menu-item {*/
  /*margin: 10px;*/
  /*padding: 40px;*/
  /*}*/

  /*.menu {*/
  /*top: calc(40% - 6em);*/
  /*}*/

  /*}*/

  /*@media (max-width: 1800px) {*/

  /*.intro {*/
  /*top: calc(50% - 6em);*/
  /*left:5vw;*/
  /*position: absolute;*/
  /*}*/

  /*}*/

  /*@media (max-width: 1400px) {*/

  /*.intro {*/
  /*top: calc(50% - 6em);*/
  /*left:5vw;*/
  /*position: absolute;*/
  /*}*/

  /*}*/

  /*@media (max-width: 1198px) {*/

  /*.menu-item {*/
  /*margin: 4px;*/
  /*}*/

  /*.menu {*/
  /*top: calc(40% - 6em);*/
  /*}*/

  /*}*/

  /*@media (max-width: 778px) {*/

  /*.menu-item {*/
  /*margin: 4px;*/
  /*!*padding: 10px;*!*/
  /*}*/

  /*.menu {*/
  /*top: calc(44% - 6em);*/
  /*}*/

  /*}*/

  /*
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  /*@media (min-width: 0px) and (max-width: 770px){*/

  /*.menu {*/
  /*top: calc(80% - 6em);*/
  /*}*/

  /*}*/

  /*!**/
  /*##Device = Low Resolution Tablets, Mobiles (Landscape)*/
  /*##Screen = B/w 481px to 767px*/
  /**!*/

  /*@media (min-width: 481px) and (max-width: 767px) {*/

  /*}*/

  /*!**/
  /*##Device = Most of the Smartphones Mobiles (Portrait)*/
  /*##Screen = B/w 320px to 479px*/
  /**!*/

  /*@media (min-width: 320px) and (max-width: 480px) {*/

  /*}*/


</style>
