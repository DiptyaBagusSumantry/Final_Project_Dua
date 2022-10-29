// require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const UserController = require('./controllers/UserController');
const port = process.env.PORT || 2000
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/users/register', UserController.register);

app.use(routes);

app.listen(port, ()=>{
    console.log("app runing di port http://localhost:"+ port);
});