const {User, Photo, Comment, SocialMedia} =require('../models');

async function authorizationUser(req, res, next) {
    try {
        const AuthenticatedUser = res.locals.user;
        const one = await User.findOne({where: {id: req.params.id}});

        if(!one){
            return res.status(404).json({
                message: "User Tidak Ada!"
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
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }   
}

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