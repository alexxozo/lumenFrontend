const express = require('express'),
  createError = require('http-errors'),
  controllers = require('../controllers');

const router = express.Router();

// ---------- GET ----------
// Main Route
router.get('/', controllers.getAll);

module.exports = router;
