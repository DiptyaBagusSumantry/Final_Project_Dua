const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const UserController = require('../controllers/UserController');
const PhotoController = require('../controllers/PhotoController')

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication)

//User
router.get('/getUser', UserController.getUser);
router.put('/users/update/:id', UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);

//Photo
router.get('/photo/getPhoto', PhotoController.getPhoto);
router.post('/photo/createPhoto', PhotoController.createPhoto);
router.put('/photo/updatePhoto/:id', PhotoController.updatePhoto);
router.delete('/photo/deletePhoto/:id', PhotoController.deletePhoto);














module.exports = router;