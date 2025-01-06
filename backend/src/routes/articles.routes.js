const express = require('express');
const { getEnhancedArticles } = require('../controllers/articles.controller');
const router = express.Router();

router.get('/articles', getEnhancedArticles);

module.exports = router;

