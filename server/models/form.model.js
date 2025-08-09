// models/form.model.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., categorize, cloze, comprehension
  questionText: { type: String, required: true },
  options: [{ type: String }],
  image: { type: String }
});

const formSchema = new mongoose.Schema({
  formTitle: { type: String, required: true },
  headerImage: { type: String },
  questions: [questionSchema]
});

module.exports = mongoose.model('Form', formSchema);
