const express = require('express');
const app = express();
const session = require('express-session');
const port = 3003;
const routes = require('./routes/routes');
const bodyparser = require('body-parser');
const database = require('./model/db')





app.use(session(
  {

    secret:'webslesson',
    resave: true,
    saveUninitialized:true
  }  
));


app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(routes)
app.listen(port,()=>{
    console.log(`Server is runing on ${port}`)
})