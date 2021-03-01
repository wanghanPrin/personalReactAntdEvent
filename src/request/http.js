//axios封装
import axios from 'axios'
import { message  } from 'antd';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        // 401: 未登录
        // 只有在当前路由不是登录页面才跳转
        case 401:
            this.props.history.push('/')
          break;
          // 403 token过期
          // 清除本地token
          // 跳转登录页面
        case 403:
          message.error('登录过期，请重新登录')
          this.props.history.push('/')
          break;
          // 404请求不存在
        case 404:
          message.error('网络请求不存在')
          this.props.history.push('/')
          break;
          // 其他错误，直接抛出错误提示
        default:
          message.error(error.response.data.message)
      }
    }
  })

  export function get(url, params) {
    return new Promise((resolve, reject) => {
      let s = [];
      let hexDigits = "0123456789abcdef";
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
      s[8] = s[13] = s[18] = s[23] = "-";
      var num_only = s.join("");
      let url2 = ''
      if(url.indexOf('?')!==-1){
        url2=url+'&p='+num_only
      }else if(params===''||params===undefined){
        url2=url+'?p='+num_only
      }else{
        url2=url+'&p='+num_only
      }
      axios.get(url2, {
          params: params
        })
        .then(res => {
          if(res.data.code === 1000){
            message.error(res.data.msg)
            this.props.history.push('/')
          }else{
            resolve(res);
          }
        })
        .catch(err => {
          message.error('系统错误')
        })
    });
  }
export function post(url, params,token) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'post',
      data: params,
      timeout: 1000 * 60,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'token':token
      }
    })
      .then(res => {
        if(res.data.code === 1000){
          message.error(res.data.msg)
          this.props.history.push('/')
        }else{
          resolve(res);
        }
      })
      .catch(err => {
        // message.error('系统错误')
        reject(err)
      });
  });
}
export function post2(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
        params: params
      })
      .then(res => {
        if(res.data.code === 1000){
          message.error(res.data.msg)
          this.props.history.push('/')
        }else{
          resolve(res);
        }
      })
      .catch(err => {
        message.error('系统错误')
      })
  });
}
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'put',
      data: params,
      timeout: 1000 * 60,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      .then(res => {
        if(res.data.code === 1000){
          message.error(res.data.msg)
          this.props.history.push('/')
        }else{
          resolve(res);
        }
      })
      .catch(err => {
        reject(err)
      })
  });
}
//导出
export function post3(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'post',
      data: params,
      timeout: 1000 * 60,
      // responseType: 'blob',
      headers: {
        'Content-Type': 'application/json; application/octet-stream'
      },
      responseType:'arraybuffer',
    })
      .then(res => {
           resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
