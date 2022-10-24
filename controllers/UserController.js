const {User} = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jwt')

class UserController{
    static async register (req,res){
        const {full_name, email, username,password,profil_image_url,age,phone_number}=req.body;
        try {
            //cek email sudah ada blm
            const getUser = await User.findOne({
                where: {email}
            });

            //cek username sudah ada blm
            const cekUsername = await User.findOne({
                where: {username}
            });

            if(getUser){
                res.status(404).json({
                    message: "Email Already Registered!"
                })
            }else if(cekUsername){
                res.status(404).json({
                    message: "Username Already Registered!"
                })
            }else{
            //insert data ke user
            const user = await User.create({
                full_name,
                email,
                username,
                password,
                profil_image_url,
                age: +age,
                phone_number
            })
            res.status(201).json({
                message: "Data User berhasil di tambahkan",
                data: user
            })
        }
            
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async login(req,res){
        const {email,password}= req.body;
        try {
            const user = await User.findOne({
                where: {
                    email
                },
            });

            //check user with email
            if(!user){
                res.status(404).json({
                    message: "User Not Found"
                })
            }

            //check password
            const isCorrect = comparePassword(password, user.password);
            if(!isCorrect){
                res.status(404).json({
                    message: "Invalid Password"
                })
            }

            const token = generateToken({
                id: user.id,
                email: user.email
            })

            res.status(200).json({token})

            
            // if(user){
            //     const ifCorrect = comparePassword(password, user.password);
            //     if(ifCorrect){
            //         const token = generateToken({});
            //         res.status(200).json({token});
            //     }else{
            //         res.status(404).json({message: "password salah"})
            //     }
            // }else{
            //     res.status(404).json({message: `User dengan email:  ${email} tidak ada`})
            // }
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }

    static async getUser(req,res){
        try {
            const user = await User.findAll();
            if (user.length > 0){
                res.status(200).json({
                    message: "Menampilkan Data User : ",
                    data: user
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

module.exports = UserController