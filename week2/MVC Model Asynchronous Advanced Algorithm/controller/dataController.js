var dataModel = require('../model/dataModel')
const axios = require('axios');


// async function getUser() {
//     try {
//       const response = await axios.get('https://reqres.in/api/users');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

module.exports.getData =  async function getUser(req, res) {
	    try {
	      const response = await axios.get('https://reqres.in/api/users');
		  console.log(response.data);
		  res.send(response.data.data);
	    } catch (error) {
	      console.error(error);
	    }
	  }

module.exports.addData =async function(req, res) {
	const { key, value } = req.params
	
	await axios.post('https://reqres.in/api/users', {
		firstName: key,
		lastName: value
	  })
	  .then(function (response) {
		console.log(response.data);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}

module.exports.updateData =async function(req, res) {
	const { key, value,id } = req.params
	
	await axios.put(`https://reqres.in/api/users/${id}`, {
		firstName: key,
		lastName: value
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}

module.exports.removeData =async function(req, res) {
	const { key } = req.params
	
	await axios.delete(`https://reqres.in/api/users/${key}`)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}

