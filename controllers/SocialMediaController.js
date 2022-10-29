const {SocialMedia, User} = require('../models');

class SocialMediaController{
    static async createSosmed (req,res){
        const {name, social_media_url}= req.body;
        try {
            const sosmed = await SocialMedia.create({
                name, 
                social_media_url, 
                UserId : res.locals.user.id
            })
            res.status(201).json({
                social_media: sosmed
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getSosmed (req,res){
        try {
            const sosmed = await SocialMedia.findAll({
                include: [{
                    model: User,
                    attributes: ['id', 'username', 'profil_image_url']
                }]
            });
            if(sosmed.length>0){
                res.status(200).json({
                    message: "Menampilkan Data Comment",
                    data: sosmed
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

    static async putSosmed (req,res){
        const {name, social_media_url}= req.body;
        try {
            const sosmed = await SocialMedia.update({
                name, 
                social_media_url, 
                UserId: res.locals.user.id
            },{
                where: {
                    id: req.params.id
                }
            });
            const get = await SocialMedia.findOne({
                where:{
                    id: req.params.id
                }
            })
            res.status(200).json({
                social_media: get
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async deleteSosmed (req,res){
        try {
            await SocialMedia.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: "Data Berhasil di Hapus"
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }





}

module.exports = SocialMediaController