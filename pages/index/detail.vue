<template lang="pug">
  section.container
    .detail detail
    router-link(:to="{name:'index'}") index
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
