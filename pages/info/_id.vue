<template lang="pug">
  section.container
    .detail info {{id}}
    router-link(:to="{name:'info-id', params:{id: 11}}") index
    br
    router-link(:to="{name:'info-id', params:{id: 113}}") index1134444
    br
    router-link(:to="{name:'index-detail'}") detail
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
//  import axios from 'axios'
  export default {
  	async asyncData (context) {
//      let data = await axios.post("/api/home/homearticle", {
//        page: 1,
//        size: 20
//      })
//      console.log(data)
      return { id: context.params.id}
    },
    head () {
      return {
        title: '详情页',
        meta: [
          { hid: 'description', name: 'description', content: '这是网页的描述,'},
          { hid: 'keywords', name: 'keywords', content: '关键词1,关键词2'}
        ]
      }
    },
    components: {
      AppLogo
    },
    mounted(){
//  		this.$router.push({name:'index-detail'})
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
