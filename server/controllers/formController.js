const Form = require('../models/Form');
const Response = require('../models/Response');

// Create new form
exports.createForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get form by ID
exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Submit form response
exports.submitResponse = async (req, res) => {
  try {
    const response = new Response(req.body);
    await response.save();
    res.status(201).json({ message: 'Response submitted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
