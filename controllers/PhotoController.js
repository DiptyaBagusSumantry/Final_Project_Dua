const {Photo,Comment,User} = require('../models');

class PhotoController{
    static async createPhoto (req,res){
        const {title, caption, poster_image_url}=req.body;
        try {
            //insert data ke Photo
            const photo = await Photo.create({
                title,
                caption,
                poster_image_url,
                UserId: res.locals.user.id
            })
            res.status(201).json({
                message: "Data User berhasil di tambahkan",
                data: photo
            }) 
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getPhoto(req,res){
        try {
            const photo = await Photo.findAll({
                include: [{
                    model: Comment,
                    attributes: ['Comments'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    }, {
                        model: User,
                        attributes: ['id', 'username', 'profil_image_url']
                }]
            });
            if(photo.length>0){
                res.status(200).json({
                    message: "Menampilkan Data Photo",
                    data: photo
                })
            }else{
                res.status(200).json({
                    message: "Tidak Ada Data"
                })
            }
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async updatePhoto (req,res){
        const {title, caption, poster_image_url}=req.body;
        try {
            //update photo
            const update = await Photo.update({
                title,
                caption,
                poster_image_url,
                UserId : res.locals.user.id
            }, {
                where: {
                    id: req.params.id
                }
            });
            // get updated data photo
            const get = await Photo.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: "Data Berhasil di Update",
                photo: get
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async deletePhoto (req,res){
        try {
            const photo = await Photo.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: "Data Berhasil Di Hapus"
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

}

module.exports = PhotoController