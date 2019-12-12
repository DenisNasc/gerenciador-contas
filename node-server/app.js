const express = require('express')
const app = express()
const home = require('./routes/index')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET')
    res.header('Access-Control-Allow-Headers','Content-Type')
    next()
})

app.use('/', home)

app.listen(7000, () => console.log('Servidor ON na porta: 7000!'))