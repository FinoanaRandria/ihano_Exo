exports.home = (req, res) => {
  res.render("home");
};

exports.quiz = (req,res)=>{
    res.render('quiz1')
}
/* post */

exports.post1 = (req,res)=>{


       if(req.body.question1 == "finoana" || req.body.question1 == "landry" || req.body.question1 == "tolotra" || req.body.question1 == "jose" || req.body.question1 == "tohy" || req.body.question1 == "johana" ){
            res.render('quiz2')
       }else{
        res.render('quiz1')
       }

       console.log(req.body.question1)
       res.end()
}

exports.post2 = (req,res)=>{


  if(req.body.question2 == "masisou" || req.body.question2 == "dubai" || req.body.question2 == "sql" ){
       res.render('quiz3')
  }else{
   res.render('quiz2')
  }

  console.log(req.body.question2)
  res.end()
}


exports.post3 = (req,res)=>{


  if(req.body.question3 == "eliot" || req.body.question3 == "angela" || req.body.question3 == "whiterose" ){
       res.render('quiz4')
  }else{
   res.render('quiz3')
  }

  console.log(req.body.question3)
  res.end()
}


exports.post4 = (req,res)=>{


  if(req.body.question4 == "hamstaf" || req.body.question4 == "cancorso" || req.body.question4 == "chiwawa" ){
       res.render('quiz5')
  }else{
   res.render('quiz4')
  }

  console.log(req.body.question4)
  res.end()
}


exports.post5 = (req,res)=>{


  if(req.body.question5 == "soupe" || req.body.question5 == "minsao" || req.body.question5 == "frite" ){
       res.render('finish')
  }else{
   res.render('quiz5')
  }

  console.log(req.body.question5)
  res.end()
}