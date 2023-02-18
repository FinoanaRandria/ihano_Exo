
const {Router} = require('express')
const {home,quiz,quiz2,quiz3,quiz4,quiz5,finish} = require('./controllers/ctrl')
const {post1,post2,post3,post4,post5} = require('./controllers/ctrl')
const router = Router()



router.get('/',home)

router.get('/qest+1',quiz)
router.get('/qest2',quiz2)
router.get('/qest3',quiz3)
router.get('/qest4',quiz4)
router.get('/qest5',quiz5)
router.get('/finish',finish)


/* partie post */

router.post('/qest1',post1)
router.post('/qest2',post2)
router.post('/qest3',post3)
router.post('/qest4',post4)
router.post('/qest5',post5)


module.exports = router