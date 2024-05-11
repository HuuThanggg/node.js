const getHomepage = (req,res) =>{
    res.send('tranggggggg home')
}
const getABC = (req,res) => {
    res.send('check abcccccc')
}
const getUploadfile =  ('/uploadfile',(req,res) => {
    //res.send('<h1>nơi úp load file</h1>')
    res.render('sample.ejs')
})
module.exports = {
    getHomepage,getABC,getUploadfile
}