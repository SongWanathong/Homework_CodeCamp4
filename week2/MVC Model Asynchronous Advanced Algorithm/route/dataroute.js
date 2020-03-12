var express = require('express')
var dataController = require('../controller/dataController')
var router = express.Router()

router.get('/getdata', dataController.getData)
router.post('/:key/:value', dataController.addData)
router.patch('/:key/:value', dataController.updateData)
router.delete('/:key', dataController.removeData)

module.exports = router
