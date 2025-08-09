// routes/form.routes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/form.controller');

router.post('/', formController.createForm);
router.get('/:id', formController.getFormById);

module.exports = router;
