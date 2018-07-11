<template>
    <div class="footer-wrap" >
      <div class="footer-text">
        Made with &nbsp;<i class="far fa-heart heart-col"></i> &nbsp;by rama41222
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          scrolled: false,
        }
      },
      methods:{
        isScrolling(evt) {
          console.log(evt)
          this.isScrolling = false
        }
      }
    }
</script>

<style>
  .footer-wrap {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    background-color: rgba(251, 249, 249, 0.6);
    grid-gap: 1em;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .footer-wrap > div {
    margin-right: 2em;
    margin-left: 2em;
    padding: 0.2em;
    text-align: center;
    font-family: monospace;
    font-size: small;
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
  }

  .heart-col {
    color: #ff497d;
  }

  .footer-down {
    bottom: -40px !important;
    transition: 0.4s;
  }

</style>
