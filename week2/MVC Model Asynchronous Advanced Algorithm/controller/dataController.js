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

module.exports.addData = function(req, res) {
	const { key, value } = req.params
	
	dataModel.set(key, value)
	res.status(200).send('Success')
}

module.exports.updateData = function(req, res) {
	const { key, value } = req.params
	
	if (dataModel.has(key)) {
		dataModel.set(key, value)
		res.status(200).send('Success')
	} else {
		res.status(404).send(key + ' is not found')
	}
}

module.exports.removeData = function(req, res) {
	const { key } = req.params
	
	if (dataModel.has(key)) {
		dataModel.delete(key)
		res.status(200).send('Success')
	} else {
		res.status(404).send(key + ' is not found')
	}
}

