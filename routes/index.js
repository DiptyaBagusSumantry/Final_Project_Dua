const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const UserController = require('../controllers/UserController');
const PhotoController = require('../controllers/PhotoController')

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);


router.use(authentication)
//User
router.get('/getUser', UserController.getUser);

//Photo
router.get('/photo/getPhoto', PhotoController.getPhoto);

router.get('/photos', ()=>{});












module.exports = router;