/* ---get--- */
exports.register = (req,res)=>{
    res.render('register')
}

exports.login = (req,res)=>{
    res.render('login')
}



/* ---post--- */

exports.post1 = (req,res)=>{
   console.log(req.body)
   res.end()
}

exports.post2 = (req,res)=>{
  console.log(req.body)
 res.end()
}