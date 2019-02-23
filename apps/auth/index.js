const express = require('express')
const router = express.Router()
const app = require('./app')

router.post('/register',app.register)
router.get('/verify',app.verify )
router.post('/login',app.login)

// router.get('/', app.getList)
// router.get('/:_id', app.getOne)
// router.delete('/:_id',app.deleteOne)
module.exports = router