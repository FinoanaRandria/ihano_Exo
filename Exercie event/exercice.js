
const fs = require('fs')

 function readFinsihedfiles(err,data){
    if(err) throw err
    console.log('-Data du fichier 1 ')
      console.log(data.toString())
 }

 function readFinsihedfiles2(err,data){
  if(err) throw err
  console.log('-Data du fichier 2 ')
    console.log(data.toString())
}



 console.log('/n');
 console.log('-data du fichier 1');
 fs.readFile('./text/fichier1.txt',readFinsihedfiles)


 console.log('/n');
 console.log('-data du fichier 2');
 fs.readFile('./text/fichier2.txt',readFinsihedfiles2)