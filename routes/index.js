const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const UserController = require('../controllers/UserController');
const PhotoController = require('../controllers/PhotoController');
const CommentController = require('../controllers/CommentController');
const {authorizationUser, authorizationPhoto, authorizationComment, authorizationSocialMedia } = require('../middlewares/authorization');
const SocialMediaController = require('../controllers/SocialMediaController');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication)

//User
router.get('/getUser', UserController.getUser);
router.use('/users/update/:id', authorizationUser);
router.put('/users/update/:id', UserController.updateUser);
router.use('/users/delete/:id', authorizationUser);
router.delete('/users/delete/:id', UserController.deleteUser);

//Photo
router.post('/photo/createPhoto', PhotoController.createPhoto);
router.get('/photo/getPhoto', PhotoController.getPhoto);
router.use('/photo/updatePhoto/:id', authorizationPhoto);
router.put('/photo/updatePhoto/:id', PhotoController.updatePhoto);
router.use('/photo/deletePhoto/:id', authorizationPhoto);
router.delete('/photo/deletePhoto/:id', PhotoController.deletePhoto);

//Comments
router.post('/comment/createComment', CommentController.createComment);
router.get('/comment/getComment', CommentController.getComment);
router.use('/comment/updateComment/:id', authorizationComment);
router.put('/comment/updateComment/:id', CommentController.updateComment);
router.use('/comment/deleteComment/:id', authorizationComment);
router.delete('/comment/deleteComment/:id', CommentController.deleteComment);

//Sosmed    
router.post('/sosmed/createSosmed', SocialMediaController.createSosmed);
router.get('/sosmed/getSosmed', SocialMediaController.getSosmed);
router.use('/sosmed/putSosmed/:id', authorizationSocialMedia);
router.put('/sosmed/putSosmed/:id', SocialMediaController.putSosmed);
router.use('/sosmed/deleteSosmed/:id', authorizationSocialMedia);
router.delete('/sosmed/deleteSosmed/:id', SocialMediaController.deleteSosmed);

module.exports = router;