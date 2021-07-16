const express = require('express');

//const { check } = require('../controllers/check');

router = express.Router();

// check = require('../controllers/check');
checkForum = require('../controllers/fossForum');
checkfossBlog = require('../controllers/fossBlog');

// router.get('/check', check.check);
router.get('/checkForum', checkForum.checkForum);
router.get('/checkBlog', checkfossBlog.checkfossBlog);

module.exports = router;