<template>
  <div class="network-wrapper">
    <div :class="isOnline ? 'online' : 'offline'">
      {{ !isOnline ? 'Internet is Broken \:\(' : '' }}
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        isOnline: 'getOnline'
      })
    }
  }
</script>

<style scoped>

  .network-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .network-wrapper > div {
    text-align: center;
    font-family: monospace;

  }

  .online {
    background: #00be95;
    width:1rem;
    height: 1rem;
    border-radius: 1rem;
    position: absolute;
    top: 1em;
    left: 1em;
    transition: 0.7s;
  }

  .offline {
    background: #ff2f55;
    width:100%;
    color: #fff;
    font-weight: bolder;
    font-size: 2em;
    transition: 0.7s;
  }

</style>
