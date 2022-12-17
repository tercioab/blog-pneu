const express = require('express');

const router = express.Router();
const post = require('../controller/post.controller');


router.get('/', post.allPosts);

module.exports = router; 