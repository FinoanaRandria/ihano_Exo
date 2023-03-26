const { query } = require('express')
const database = require('../model/db')

/* ---get--- */
exports.register = (req,res)=>{
    res.render('register')
}

exports.login = (req,res)=>{
    res.render('login', {session: req.session})
}



/* ---post--- */

exports.post1 = (req,res)=>{
   console.log(req.body)
   res.end()
}

exports.post2 = (req,res)=>{
  console.log(req.body)
   
  const user  = req.body.login;
  const password = req.body.pass;

  if( user && password){
      query = `
          SELECT * FROM admin WHERE login = "${user}"
      `;

      database.query();
  }else{
        res.send(' veuillez entrer votre email et votre mot de passe ')
  }

 res.end()
}