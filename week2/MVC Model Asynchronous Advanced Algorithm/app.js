var express = require('express')
var bodyParser = require('body-parser')
var dataroute = require('./route/dataroute')
var app = express()
const axios = require('axios');


app.use(express.static('public'))
app.use(bodyParser.json())

app.use('data', dataroute)

// axios.get('https://reqres.in/api/users')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
   
//   });

async function getUser() {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
async function work(){

}
getUser()
  new Promise (async (resolve) =>{
      resolve(await work())
  }).then( () => {
      console.log('succec')
  })


  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

app.listen(3000)

