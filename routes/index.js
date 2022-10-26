const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const UserController = require('../controllers/UserController');
const PhotoController = require('../controllers/PhotoController');
const CommentController = require('../controllers/CommentController');
const {authorizationUser, authorizationPhoto } = require('../middlewares/authorization');
const SocialMediaController = require('../controllers/SocialMediaController');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication)

//User
router.get('/getUser', UserController.getUser);
router.put('/users/update/:id', UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);

//Photo
router.use('/photo/getPhoto/:id', authorizationPhoto);
router.post('/photo/createPhoto', PhotoController.createPhoto);
router.put('/photo/updatePhoto/:id', PhotoController.updatePhoto);
router.delete('/photo/deletePhoto/:id', PhotoController.deletePhoto);

//Comments
router.post('/comment/createComment', CommentController.createComment);
router.get('/comment/get', CommentController.getComment);
router.put('/comment/updateComment/:id', CommentController.updateComment);
router.delete('/comment/deleteComment/:id', CommentController.deleteComment);

//Sosmed
router.post('/sosmed/crateSosmed', SocialMediaController.createSosmed);
router.get('/sosmed/getSosmed', SocialMediaController.getSosmed);
router.put('/sosmed/putSosmed/:id', SocialMediaController.putSosmed);
router.delete('/sosmed/deleteSosmed/:id', SocialMediaController.deleteSosmed);

module.exports = router;