const request = require('supertest')
const app = require('../index')
const { sequelize } = require('../models')

const userData = [
    {
        //User Data Berhasil Register
        full_name: "Muhammad Nauval Saiholau",
        email: "nauval@gmail.com",
        username: "nauval",
        password: "1234",
        profil_image_url: "aaaaa.com",
        age: 10,
        phone_number: '089501358797'
    },
    {
        //User Data Fullname Kosong
        full_name: "",
        email: "asdasdas@gmail.com",
        username: "cekcek",
        password: "1234",
        profil_image_url: "aaaaa.com",
        age: 10,
        phone_number: "019239012"
    },
    {
        //Email Already Registered
        full_name: "Muhammad Nauval Saiholau",
        email: "nauval@gmail.com",
        username: "cekcek",
        password: "1234",
        profil_image_url: "aaaaa.com",
        age: 10,
        phone_number: "019239012"
    },
    {
        //Username Already Registered
        full_name: "Muhammad Nauval Saiholau",
        email: "nauval123@gmail.com",
        username: "nauval",
        password: "1234",
        profil_image_url: "aaaaa.com",
        age: 10,
        phone_number: "019239012"
    },
    {
        //Umur Bukan Integer
        full_name: "Muhammad Nauval Saiholau",
        email: "nauval123@gmail.com",
        username: "Umur",
        password: "1234",
        profil_image_url: "aaaaa.com",
        age: "asdasdasdsdas",
        phone_number: "019239012"
    }
]

describe('POST /users/register', () => {

    //Data User Berhasil Register
    it('Should Send Response with 201 Status Code', (done)=> {
        request(app)
        .post('/users/register')
        .send(userData[0])
        .end(function (err,res){
            if(err){
                done(err)
            }
            expect(res.status).toEqual(201)
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("user.email")
            expect(res.body).toHaveProperty("user.full_name")
            expect(res.body).toHaveProperty("user.username")
            expect(res.body).toHaveProperty("user.profil_image_url")
            expect(res.body).toHaveProperty("user.age")
            expect(res.body).toHaveProperty("user.phone_number")
            expect(res.body.user.email).toEqual(userData[0].email)
            expect(res.body.user.full_name).toEqual(userData[0].full_name)
            expect(res.body.user.username).toEqual(userData[0].username)
            expect(res.body.user.profil_image_url).toEqual(userData[0].profil_image_url)
            expect(res.body.user.age).toEqual(userData[0].age)
            expect(res.body.user.phone_number).toEqual(userData[0].phone_number)
            done()
        })
    })

    it('Should Send Response with 404 Status Code', (done)=> {
        request(app)
        .post('/users/register')
        .send(userData[1])
        .end(function (err,res){
            if(err){
                done(err)
            }
            expect(res.status).toEqual(404)
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("message")
            done()
        })
    })

    it('Should Send Response with 400 Status Code', (done)=> {
        request(app)
        .post('/users/register')
        .send(userData[2])
        .end(function (err,res){
            if(err){
                done(err)
            }
            expect(res.status).toEqual(400)
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("message")
            done()
        })
    })

    it('Should Send Response with 400 Status Code', (done)=> {
        request(app)
        .post('/users/register')
        .send(userData[3])
        .end(function (err,res){
            if(err){
                done(err)
            }
            expect(res.status).toEqual(400)
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("message")
            done()
        })
    })

    it('Should Send Response with 404 Status Code', (done)=> {
        request(app)
        .post('/users/register')
        .send(userData[4])
        .end(function (err,res){
            if(err){
                done(err)
            }
            expect(res.status).toEqual(404)
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("message")
            done()
        })
    })
})

afterAll((done)=> {
    sequelize.queryInterface.bulkDelete('Users', {})
    .then(()=> {
        return done()
    })
    .catch(err => {
        done(err)
    })
})