const axios = require('axios').default

const baseUrl = 'http://localhost:9000/api/'
export const sessionId: null | string = null

export const sessionAPI = {

  initSession() {
    return axios.post(`${baseUrl}session`, {
      "errorRate": 20
    },
    {
      headers: {'Content-Type': 'application/json'}
    })
    .then((response: any) => {
      console.log(response);
      return response
    })
    .catch(function (error: any) {
      console.log(error);
    })
  },

  deleteSession() {
    return axios.delete(`${baseUrl}session`,
    {
      headers: {
        'Content-Type':'application/json',
        'sessionId':'session Id received from the POST endpoint'
      }
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    })
  }
}


/* axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {
    console.log(error);
  })
  .then(function () {
    // always executed
}) */



export {}