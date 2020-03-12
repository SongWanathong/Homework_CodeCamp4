var express = require('express')
var router = express.Router()

var list = []

router.get('/', function(req ,res) {
	res.send(list)
})
router.post('/', function(req, res) {
	list.push(req.body.data)
	res.send(list)
})
module.exports = router
