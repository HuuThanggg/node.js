const express = require('express');
const path = require('path');
require('dotenv').config();

console.log("check env:" ,process.env);
const app = express()
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
//khai báo route
app.get('/',(req,res) => {
    res.send('helooooooooooo')
})
app.get('/abc',(req,res) => {
    res.send('check abcccccc')
})
app.get('/uploadfile',(req,res) => {
    //res.send('<h1>nơi úp load file</h1>')
    res.render('sample.ejs')
})
app.listen(port,hostname, () => {
    console.log(`đang chạy port ${port}`)
})