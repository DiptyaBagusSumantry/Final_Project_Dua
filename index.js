const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

app.listen(port, ()=>{
    console.log("app runing di port 2000");
});