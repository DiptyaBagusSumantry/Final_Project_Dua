<<<<<<< HEAD
const {User, Photo, Comment} =require('../models');
=======
const {User, Photo, Comment, SocialMedia} =require('../models');
>>>>>>> 6249b1b70daf50e8d886f49da2cfaaf1430e4892

//User yang login yang bisa edit data user
async function authorizationUser(req, res, next) {
    try {
        const AuthenticatedUser = res.locals.user;
        const one = await User.findOne({where: {id: req.params.id}});

<<<<<<< HEAD

        if(one.id === AuthenticatedUser.id){

            const user = await User.update({
                full_name,
                email,
                username,
                profil_image_url,
                age: +age,
                phone_number
            }, {
                where: {
                    id: req.params.id
                }
            });

            if(!user){
                res.status(404).json({
                    message: "User Not Found"
                });
            }
            next();
            res.status(200).json({
                message: "Data Berhasil di Edit",
=======
        if(!one){
            return res.status(404).json({
                message: "User Tidak Ada!"
>>>>>>> 6249b1b70daf50e8d886f49da2cfaaf1430e4892
            })
        }
        if(one.id === AuthenticatedUser.id){
            next();
        }else{
            res.status(404).json({
                message: "User dengan email tersebut tidak memiliki akses ke User tersebut"
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }   
}

//=========PHOTO===========
//
async function authorizationPhoto(req, res, next) {
    const AuthenticatedUser = res.locals.user;

    try {
        const foto = await Photo.findOne({
            where: {
                id: req.params.id
            }
        });

        if(!foto){
            return res.status(404).json({
                message: "Photo Not Found"
            });
        }

        if(foto.UserId === AuthenticatedUser.id){
            next();
        }else{
            res.status(404).json({
                message: "User dengan email tersebut tidak memiliki akses ke foto tersebut"
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }   
}

<<<<<<< HEAD
//User yang login yang bisa edit data user
async function authorizationComment(req, res, next) {
    const AuthenticatedUser = res.locals.user;
    const {Comments}=req.body;
    try {
        const one = await Comment.findOne({where: {id: req.params.id}});

        console.log(one.UserId)
        if(one.UserId === AuthenticatedUser.id){

            await Comment.update({
                UserId: AuthenticatedUser.id,
                Comments
            }, {
                where: {
                    id: req.params.id
                }
            });
            if(!Comment){
                res.status(404).json({
                    message: "User Not Found"
                });
            }
            next();
            res.status(200).json({
                message: "Data Berhasil di Edit",
            })
        }else{
            res.status(404).json({
                message: "User dengan email tersebut tidak memiliki akses Edit ke Comment tersebut"
=======
// COMMENT
async function authorizationComment(req, res, next) {
    const AuthenticatedUser = res.locals.user;

    try {
        const comment = await Comment.findOne({
            where: {
                id: req.params.id
            }
        });

        if(!comment){
            return res.status(404).json({
                message: "Comment Not Found"
            });
        }

        if(comment.UserId === AuthenticatedUser.id){
            next();
        }else{
            res.status(404).json({
                message: "User dengan email tersebut tidak memiliki akses ke foto tersebut"
>>>>>>> 6249b1b70daf50e8d886f49da2cfaaf1430e4892
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }   
}

<<<<<<< HEAD
module.exports = {authorizationUser,authorizationPhoto, authorizationComment};
=======
async function authorizationSocialMedia(req, res, next) {
    const AuthenticatedUser = res.locals.user;

    try {
        const sosmed = await SocialMedia.findOne({
            where: {
                id: req.params.id
            }
        });

        if(!sosmed){
            return res.status(404).json({
                message: "Social Media Not Found"
            });
        }

        if(sosmed.UserId === AuthenticatedUser.id){
            next();
        }else{
            res.status(404).json({
                message: "User dengan email tersebut tidak memiliki akses ke foto tersebut"
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }   
}

module.exports = {authorizationUser,authorizationPhoto,authorizationComment,authorizationSocialMedia};
>>>>>>> 6249b1b70daf50e8d886f49da2cfaaf1430e4892
