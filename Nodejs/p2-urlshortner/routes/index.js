const express = require('express');
const { generateNewShortUrl, handleUrlrequest, handleGetAnalytics } = require('../controllers/index');

const router =  express.Router();

router.post('/', generateNewShortUrl);

router.get('/:shortId', handleUrlrequest);

router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;