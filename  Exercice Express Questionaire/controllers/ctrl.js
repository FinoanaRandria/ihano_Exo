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


  if(req.body.question2 == "masisou" || req.body.question1 == "dubai" || req.body.question1 == "sql" ){
       res.render('quiz3')
  }else{
   res.render('quiz2')
  }

  console.log(req.body.question1)
  res.end()
}


exports.post3 = (req,res)=>{


  if(req.body.question3 == "eliot" || req.body.question1 == "angela" || req.body.question1 == "whiterose" ){
       res.render('quiz4')
  }else{
   res.render('quiz3')
  }

  console.log(req.body.question1)
  res.end()
}


exports.post4 = (req,res)=>{


  if(req.body.question4 == "Masisou" || req.body.question1 == "Dubai" || req.body.question1 == "Sql" ){
       res.render('quiz5')
  }else{
   res.render('quiz4')
  }

  console.log(req.body.question1)
  res.end()
}