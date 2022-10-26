const {Comment} = require('../models')

class CommentController{
    static async createComment (req,res){
        const {UserId, PhotoId, Comments}=req.body;
        try {
            const komen = await Comment.create({ 
                UserId,
                PhotoId,
                Comments
            })
            res.status(201).json({
                message: "Data User berhasil di tambahkan",
                data: komen
            }) 
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getComment (req,res){
        try {
            const komen = await Comment.findAll();
            if(komen.length>0){
                res.status(200).json({
                    message: "Menampilkan Data Comment",
                    data: komen
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

    static async updateComment (req,res){
        const {UserId, PhotoId, Comments}=req.body;
        try {
            const komen = await Comment.update({
                UserId,
                PhotoId,
                Comments
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

    static async deleteComment (req,res){
        try {
            const komen = await Comment.destroy({
                where: {
                    id: req.params.id
                }
            })
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

module.exports = CommentController