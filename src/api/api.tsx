const axios = require('axios').default

/* const instance = axios.create({
    baseURL: 'http://localhost:9000/api/',
    headers: {'Content-Type': 'application/json'}
  })

// Initialize a session

axios#post(url[, data[, config]]) */

// Initialize a session
axios.post('http://localhost:9000/api/session', {
    "errorRate": 20
  })
  .then(function (response: any) {
    console.log(response);
  })
  .catch(function (error: any) {
    console.log(error);
})

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
})



export {}