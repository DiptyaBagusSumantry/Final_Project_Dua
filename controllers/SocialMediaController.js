const {SocialMedia} = require('../models');

class SocialMediaController{
    static async createSosmed (req,res){
        const {name, social_media_url, userId}= req.body;
        try {
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }
}