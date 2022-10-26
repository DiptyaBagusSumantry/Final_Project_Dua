const {User, Photo} =require('../models');

async function authorizationUser(req, res, next) {
    const AuthenticatedUser = res.locals.user;
    const {full_name, email, username,password,profil_image_url,age,phone_number}=req.body;
    try {
        const one = await User.findOne({where: {id: req.params.id}});
        const user = await User.update({
            full_name,
            email,
            username,
            password,
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

        if(one.id === AuthenticatedUser.id){
            next();
            res.status(200).json({
                message: "Data Berhasil di Edit",
            })
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