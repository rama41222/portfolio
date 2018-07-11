<template>
    <div class="footer-wrap">
      <div class="footer-text">
        Made with &lt;3 by rama41222
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
  .footer-wrap {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    background-color: #dcdada;
    grid-gap: 2em;
  }

  .footer-wrap > div {
    margin-right: 2em;
    margin-left: 2em;
    padding: 1.5em;
    text-align: center;
  }
</style>
