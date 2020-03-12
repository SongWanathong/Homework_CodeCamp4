var express = require('express')
var dataController = require('../controller/dataController')
var router = express.Router()

router.get('/getdata', dataController.getData)
router.post('/:key/:value', dataController.addData)
router.put('/:key/:value/:id', dataController.updateData)
router.delete('/:key', dataController.removeData)

module.exports = router
