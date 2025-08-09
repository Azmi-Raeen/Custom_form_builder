// controllers/form.controller.js
const Form = require('../models/form.model');

exports.createForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Form created successfully', form });
  } catch (error) {
    res.status(500).json({ message: 'Error creating form', error });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json(form);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching form', error });
  }
};
