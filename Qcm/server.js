const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const routes = require('./routes')
const port = 3003

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(routes)
app.set('view engine','ejs')
app.use('/assets',express.static('public'))


app.listen(port, console.log(`Server is runing on ${port}`))