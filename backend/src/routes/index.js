const express = require('express');
const router = express.Router();

const {
   getCrud,
   addCrud,
   updateCrud,
   deletePost,
} = require('../controllers/crud');

router.get('/cruds', getCrud);
router.post('/cruds', addCrud);
router.patch('/cruds/:id', updateCrud);
router.delete('/cruds/:id', deletePost);

// const {
//    getUser,
//    registerUser,
//    deleteUser,
//    login,
//    getUserById,
//    checkAuth,
//    getUserProfile,
//    updateUser,
// } = require('../controllers/user');

// const { addComment, getComment } = require('../controllers/comment');
// const { insertChat, getChat } = require('../controllers/chat');
// const { addLike } = require('../controllers/like');

// // user api
// router.get('/users', getUser);
// router.get('/user-by-id/:id', getUserById);
// router.post('/login', login);
// router.post('/register', registerUser);
// router.delete('/user/:id', deleteUser);
// router.patch('/user/:iduser', updateUser);
// router.get('/check-auth', checkAuth);

module.exports = router;
