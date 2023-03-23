const {Router} = require('express');
const {register,login,post1,post2 } = require('../controller/ctrl')
const router = Router()


/* ---get--- */
router.get('/',login)
router.get('/register',register)


/* ---post--- */

router.post('/reg',post1)

router.post('/log',post2)


module.exports = router 
