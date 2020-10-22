const express = require('express')
const routes = express.Router()

const newRegister = require('./controller/newRegister')






routes.delete('/register/:id', newRegister.delete)
routes.get('/list', newRegister.index)
routes.post('/register', newRegister.create)

module.exports = routes;