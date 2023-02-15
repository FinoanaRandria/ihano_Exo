const express = require("express");
const bodyparser = require("body-parser");
const path = require('path')
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/incription", (req, res) => {
  
  const nom = req.body.nom;
  if (req.body.mdp === req.body.confmdp ) {
    
    res.render("page", { nom: nom });
  }else {
    res.render('err')
   
     
  }
    
  

  res.end();
});





app.listen(port, console.log(`Server is runing on ${port}`));
