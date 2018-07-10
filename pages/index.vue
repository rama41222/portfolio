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
                    <label class="font-one">HELLO</label>
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
                  <p class="font-three">a FullStack Engineer</p>
                </div>
              </div>
            </div>
            <div class="social">
              <div><a href="https://www.facebook.com/rama41222" target="_blank"><i class="fab fa-facebook-f"></i></a></div>
              <div><a href="https://medium.com/@rama41222" target="_blank"><i class="fab fa-medium-m"></i></a></div>
              <div><a href="https://rama41222.blogspot.com/" target="_blank"><i class="fab fa-blogger-b"></i></a></div>
              <div><a href="https://www.linkedin.com/in/dinushanka" target="_blank"><i class="fab fa-linkedin-in"></i></a></div>
              <div><a href="https://github.com/rama41222" target="_blank"><i class="fab fa-github"></i></a></div>
              <div><a href="mailto:dinushankanrg@gmail.com?Subject=Hello%20Rama" target="_top"><i
                class="far fa-envelope-open"></i></a></div>
              <div><a href="https://twitter.com/dnrg41222" target="_blank"><i class="fab fa-twitter"></i></a></div>
              <div><a href="https://www.instagram.com/rama41222" target="_blank"><i class="fab fa-instagram"></i></a></div>
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
    grid-template-rows:3fr 3fr 3fr;
    grid-row-gap: 2em;
  }

  .nested-1 {
    display: grid;
    grid-template-rows:2fr 2fr;
    grid-template-columns:1fr;
    grid-gap: 1em;
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
      grid-template-rows:3fr 2fr 2fr;

    }
    .short-title {
      justify-items: start;

    }

  }

</style>
