<template lang="pug">
  section.container
    .detail index
    router-link(:to="{name:'index-detail'}") detail
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      AppLogo
    },
    methods: {
      ...mapMutations({
        setOpenid: 'openid'
      })
    },
    mounted(){
    	console.log(this.$moment)
      this.$store.commit('setOpenid','12345')
      console.log(this.$store.state.openid)
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .detail{
      color: red;
    }
  }
</style>
