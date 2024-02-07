const {Router} = require('express')

const {createPost, getPost, getCatPost, getSinglePost, getUserPosts, editPost, deletePost} = require('../controllers/postsControllers')
const authMiddleware = require('../middleware/authMiddleware') 
const router = Router()

router.post('/',  authMiddleware, createPost)
router.get('/', getPost)
router.get('/:id', getSinglePost)
router.patch('/:id', authMiddleware, editPost)
router.get('/categories/:category', getCatPost)
router.delete('/:id', authMiddleware, deletePost)
router.get('/users/:id', getUserPosts)


module.exports = router