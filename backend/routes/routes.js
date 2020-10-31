const express = require('express');
const router = express.Router();

const { auth } = require('../controllers/auth');
const { findLatestPublications } = require('../controllers/search')

router.post('/auth', auth );
router.get('search/latest/:items', findLatestPublications)

exports.router = router;