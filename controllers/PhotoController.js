const {Photo} = require('../models');
const UserController = require('./userController');

class PhotoController{
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

}

module.exports = PhotoController