<template>
  <div>
    <NoInternet/>
    <nuxt/>
    <FooterNav/>
  </div>
</template>


<script>
import FooterNav from '../components/FooterNav'
import NoInternet from './../components/NoInternet'
  export default  {
    components:{
      FooterNav,
      NoInternet
    }
  }
</script>
<style type="scss">
</style>
