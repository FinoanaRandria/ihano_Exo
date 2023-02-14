const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/assets", express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/incription", (req, res) => {
  
  const nom = req.body.nom;
  if (req.body.mdp === req.body.confmdp && req.body.mdp!="" && req.body.confmdp!="") {
    res.render("page", { nom: nom });
  }else{
       res.render('err',{ nom: nom })
     
  }

  res.end();
});





app.listen(port, console.log(`Server is runing on ${port}`));
