const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const UserController = require('../controllers/UserController');
const PhotoController = require('../controllers/PhotoController');
const CommentController = require('../controllers/CommentController');
const {authorizationUser, authorizationPhoto, authorizationComment } = require('../middlewares/authorization');
const SocialMediaController = require('../controllers/SocialMediaController');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication)

//User
router.get('/getUser', UserController.getUser);
router.put('/users/update/:id', authorizationUser);
router.delete('/users/delete/:id', UserController.deleteUser);

//Photo
router.get('/photo/getPhoto/:id', authorizationPhoto);
router.get('/photo/getPhoto', PhotoController.getPhoto);
router.post('/photo/createPhoto', PhotoController.createPhoto);
router.put('/photo/updatePhoto/:id', PhotoController.updatePhoto);
router.delete('/photo/deletePhoto/:id', PhotoController.deletePhoto);

//Comments
router.post('/comment/createComment', CommentController.createComment);
router.get('/comment/get', CommentController.getComment);
router.put('/comment/updateComment/:id', authorizationComment);
router.delete('/comment/deleteComment/:id', CommentController.deleteComment);

//Sosmed
router.post('/sosmed/crateSosmed', SocialMediaController.createSosmed);
router.get('/sosmed/getSosmed', SocialMediaController.getSosmed);
router.put('/sosmed/putSosmed/:id', SocialMediaController.putSosmed);
router.delete('/sosmed/deleteSosmed/:id', SocialMediaController.deleteSosmed);

module.exports = router;