<template>
  <breeding-rhombus-spinner v-if="loading"
                            :animation-duration="2000"
                            :size="65"
                            :color="'#38383a'"
  />
</template>

<script>
    export default {
      props: {
        loading: Boolean
      },
      name: "loading",
    }
</script>

<style scoped>

</style>
