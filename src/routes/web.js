const express = require('express');
const router = express.Router();
const { getHomepage, getABC , getUploadfile } = require('../controllers/homeController');
//khai báo route


router.get('/', getHomepage);
  
router.get('/abc', getABC);

router.get('/uploadfile',getUploadfile)

module.exports = router;

