import * as axios from 'axios'

export default ({ app, store, redirect }) => {

  axios.defaults.baseURL = 'http://192.168.1.9:9002'

  // interceptors request
  axios.interceptors.request.use(config => {
    if(config.data){
      let data = config.data
      if(!data.args){  //nuxt 刷新嵌套问题
        if(store.state.openid){
          data.openid = store.state.openid
        }
        config.data = {
          args : JSON.stringify(data)
        }
      }
    }
    console.log(config.data)
    return config
  }, err => {
    return Promise.reject(err);
  });

  axios.interceptors.response.use(response => {

    if(response.data.success){    //nuxt 刷新嵌套问题
      return response.data
    }else{
      return response
    }

  }, function (error) {
    return Promise.reject(error);
  });

}
