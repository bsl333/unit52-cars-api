const router = require('express').Router()
const ctrl = require('../controller/cars')

router.get('/', ctrl.getAll)

module.exports = router