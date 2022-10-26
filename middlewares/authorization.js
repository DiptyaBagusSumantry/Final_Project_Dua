const {User, Photo} =require('../models');

async function authorizationUser(req, res, next) {
    const userId = req.params.userId;
    const AuthenticatedUser = res.locals.user;

    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        });

        if(!user){
            res.status(404).json({
                message: "User Not Found"
            });
        }

        if(user.id === AuthenticatedUser.id){
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

        // console.log(foto.UserId === AuthenticatedUser.id )
        if(!foto){
            res.status(404).json({
                message: "Photo Not Found"
            });
        }

        if(foto.UserId === AuthenticatedUser.id){
            next();
            res.status(200).json({
                message: "Menampilkan Data Photo Anda",
                data: foto
            })
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

module.exports = {authorizationUser,authorizationPhoto};