const express = require('express');
const router = express.Router();
const {
  createForm,
  getFormById,
  submitResponse
} = require('../controllers/formController');

// Create a new form
router.post('/', createForm);

// Get form by ID
router.get('/:id', getFormById);

// Submit form response
router.post('/submit', submitResponse);

module.exports = router;
