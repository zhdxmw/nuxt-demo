<template lang="pug">
  section.container
    .detail index
    router-link(:to="{name:'index-detail'}") detail
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
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
