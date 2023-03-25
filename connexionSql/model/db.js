const mysql = require('mysql');

/* connexion node SQL */
const connection = mysql.createConnection({
    host: 'localhost',
    database:'bdNodeExo',
    user:'root',
    password: ''
})

/* fonction pour creer une connexion mysql */

connection.connect(function(error){
/* fonction pour verifier les erreurs */
    if(error){
       throw error
    }else{
      console.log('Mysql database is connected Successfully');
    }
});