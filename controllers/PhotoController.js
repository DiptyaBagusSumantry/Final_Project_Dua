const {Photo} = require('../models');

class PhotoController{
    static async createPhoto (req,res){
        const {title, caption, poster_image_url, UserId}=req.body;
        try {
            //insert data ke user
            const user = await Photo.create({
                title,
                caption,
                poster_image_url,
                UserId
            })
            res.status(201).json({
                message: "Data User berhasil di tambahkan",
                data: user
            }) 
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getPhoto(req,res){
        try {
            const photo = await Photo.findAll();
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
        const {title, caption, poster_image_url, UserId}=req.body;
        try {
            const user = await Photo.update({
                title,
                caption,
                poster_image_url,
                UserId
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: "Data Berhasil di Update"
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async deletePhoto (req,res){
        try {
            const user = await Photo.destroy({
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