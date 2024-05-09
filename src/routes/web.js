const express = require('express');
const router = express.Router();
//khai báo route
router.get('/',(req,res) => {
    res.send('helooooooooooo và thêm mới codeeee')
})
router.get('/abc',(req,res) => {
    res.send('check abcccccc')
})
router.get('/uploadfile',(req,res) => {
    //res.send('<h1>nơi úp load file</h1>')
    res.render('sample.ejs')
})

module.exports = router;