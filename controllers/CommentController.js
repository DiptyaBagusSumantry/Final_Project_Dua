const {Comment, Photo, User} = require('../models')

class CommentController{
    static async createComment (req,res){
        const {PhotoId, Comments}=req.body;
        try {
            const checkPhoto = await Photo.findOne({
                where: {
                    id: PhotoId
                }
            })
            if(checkPhoto){
                const komen = await Comment.create({ 
                    UserId : res.locals.user.id,
                    PhotoId,
                    Comments
                })
                res.status(201).json({
                    comment: komen
                }) 
            } else{
                res.status(404).json({
                    message: "Photo Tidak Ada!"
                })
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getComment (req,res){
        try {
            const komen = await Comment.findAll({
                include: [{
                    model: Photo,
                    attributes: ['id', 'title', 'caption', 'poster_image_url'],
                    }, {
                        model: User,
                        attributes: ['id', 'username', 'profil_image_url', 'phone_number']
                }]
            });
            if(komen.length>0){
                res.status(200).json({
                    data: komen
                })
            }else{
                res.status(404).json({
                    message: "Tidak Ada Data"
                })
            }
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async updateComment (req,res){
        const {Comments}=req.body;
        try {
            const komen = await Comment.update({
                Comments
            }, {
                where: {
                    id: req.params.id
                }
            });
            const get = await Comment.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                comment: get
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async deleteComment (req,res){
        try {
            const komen = await Comment.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: "Komentar Berhasil di Hapus"
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

}

module.exports = CommentController