const {SocialMedia} = require('../models');
const socialmedia = require('../models/socialmedia');

class SocialMediaController{
    static async createSosmed (req,res){
        const {name, social_media_url, UserId}= req.body;
        try {
            const sosmed = await SocialMedia.create({
                name, 
                social_media_url, 
                UserId
            })
            res.status(201).json({
                message: "Data Berhasil di Tambahkan",
                data: sosmed
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getSosmed (req,res){
        try {
            const sosmed = await SocialMedia.findAll();
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
        const {name, social_media_url, UserId}= req.body;
        try {
            const sosmed = await SocialMedia.update({
                name, 
                social_media_url, 
                UserId
            },{
                where: {
                    id: req.params.id
                }
            });
            if(sosmed.length>0){
                res.status(200).json({
                    message: "Data Berhasil di Edit"
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