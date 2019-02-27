const express = require('express')
 
const { blogpost } = require('../controllers')
 
const router = express.Router()
 
router.post('/blogpost', blogpost.postBlogpost)
 
module.exports = router

// https://github.com/gothinkster/node-express-realworld-example-app/blob/master/config/passport.js