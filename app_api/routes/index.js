var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controllers/blogsDirections');

router.post('/blogs', ctrlBlog.blogsCreate);
router.get('/blogs/:blogid', ctrlBlog.blogsReadOne);
router.put('/blogs/:blogid', ctrlBlog.blogsUpdateOne);
router.delete('/blogs/:blogid', ctrlBlog.blogsDeleteOne);

module.exports = router;
