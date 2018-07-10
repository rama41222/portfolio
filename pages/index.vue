<template>
  <div class="no-gutters container-wrap">
    <div class="menu">
      <div class="wrapper">
        <div class="left-wrap">
          <div class="nested">
            <div class="intro">
              <div>
                <div class="typewriter">
                  <div>
                    <label class="font-one">{{prof.title}}</label>
                  </div>
                </div>
              </div>
              <div>
                <div class="name-wrap">
                  <p class="font-two" style="max-width: 100%">{{prof.name}}</p>
                </div>
              </div>
              <div>
                <div class="">
                  <p class="font-three">{{prof.who}}</p>
                </div>
              </div>
            </div>
            <div class="social">
              <div v-for="(link, index) of socialLinks" :key="index">
                <a  :rel="link.rel" :href="link.route" :target="link.target">
                  <i :class="link.class"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="works">
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

  import { mapGetters } from 'vuex'
  export default {
    components: {},
    computed: {
      ...mapGetters({
        socialLinks: 'getSocialLinks',
        prof: 'getGeneralInfo',
        projects:'getProjects'
      })
    },
    mounted() {

    },
    data() {
      return {
        date: new Date()
      }
    },
    methods: {}
  }
</script>


<style type="scss" scoped>

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }


  .wrapper {
    box-shadow: 0 0 0px 0 gray;

  }

  .wrapper > * {
    padding: 1em;
  }

  .nested {
    display: grid;
    grid-template-rows:3fr 3fr;
    grid-row-gap: 2em;
  }


  .short-title {
    display: grid;
    justify-items: center;

  }
  .works {
    left: 0;
    right: 0;
    text-align: center;
  }

  .menu-item {
    display: inline-block;
    margin: 10px;
    border: 2px solid;
    background-color: rgba(185, 183, 183, 0.14);
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

  .social {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(10px,auto);
    text-align: center;
  }

  .social > div {
    cursor: pointer;
  }

  .interests {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(10px,auto);
    text-align: center;
  }


  @media(min-width: 700px) {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 3fr;
      align-self: start;
    }

    .intro {
      text-align: start;
    }

    .social {
      text-align: start;
    }

    .interests {
      text-align: start;
    }

    .left-wrap {
     display: grid;
      align-items: start;
    }

    .nested {
      grid-row-gap: 2em;
      grid-template-rows:3fr 3fr;

    }
    .short-title {
      justify-items: start;

    }

  }

</style>
