
const {Router} = require('express')
const {home,quiz} = require('./controllers/ctrl')
const {post1,post2,post3,post4,post5} = require('./controllers/ctrl')
const router = Router()



router.get('/',home)

router.get('/Quest',quiz)



/* partie post */

router.post('/qest1',post1)
router.post('/qest2',post2)
router.post('/qest3',post3)
router.post('/qest4',post4)
router.post('/qest5',post5)


module.exports = router