/* get */

exports.home = (req, res) => {
  res.render("home");
};

exports.quiz = (req,res)=>{
    res.render('quiz1')
}


exports.quiz2 = (req,res)=>{

    res.render('quiz2')
}

exports.quiz3 = (req,res)=>{
   res.render('quiz3')
    
}

exports.quiz4 = (req,res)=>{
  res.render('quiz4')
    
}

exports.quiz5 = (req,res)=>{
  res.render('quiz5')
      
}

exports.finish = (req,res) =>{
  res.render('finish')
}

/* post */



exports.post1 = (req,res)=>{
   if(req.body.options == 'jose'){
     res.redirect('/qest2')
   }else{
      res.redirect('/qest1')
   }
  console.log(req.body)
       res.end()
}

exports.post2 = (req,res)=>{


  if(req.body.options == 'SQL'){
    res.redirect('/qest3')
  }else{
     res.redirect('/qest2')
  }
 console.log(req.body)
      res.end()
}


exports.post3 = (req,res)=>{


  if(req.body.options == 'eliot'){
    res.redirect('/qest4')
  }else{
     res.redirect('/qest3')
  }
 console.log(req.body)
      res.end()
}


exports.post4 = (req,res)=>{


  if(req.body.options == 'backend'){
    res.redirect('/qest5')
  }else{
     res.redirect('/qest4')
  }
 console.log(req.body)
      res.end()
}


exports.post5 = (req,res)=>{


  if(req.body.options == 'vscode'){
    res.redirect('/finish')
  }else{
     res.redirect('/qest5')
  }
 console.log(req.body)
      res.end()
}

/* render rend une vue lesy/
/* contrairemnt a render  redirect premet de rediriger  vers un autre lien */