require('dotenv').config();
const express = require('express');

const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web');

const app = express()
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
console.log("check env:" ,process.env);



configViewEngine(app);

//Khai báo router
app.use('./',webRouter)

app.listen(port,hostname, () => {
    console.log(`đang chạy port ${port}`)
})