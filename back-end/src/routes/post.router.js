const express = require('express');

const router = express.Router();
const post = require('../controller/post.controller');


router.get('/', post.allPosts);
router.get('/search', post.findPost);
router.get('/:id', post.getPostById)


module.exports = router; 