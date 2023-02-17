
const {Router} = require('express')
const {home,quiz} = require('./controllers/ctrl')
const {post1,post2,post3,post4} = require('./controllers/ctrl')
const router = Router()



router.get('/',home)

router.get('/Quest',quiz)



/* partie post */

router.post('/qest1',post1)
router.post('/qest2',post2)

module.exports = router