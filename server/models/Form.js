const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['categorize', 'cloze', 'comprehension'],
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  image: String, // optional question image
  options: [String], // for categorize / comprehension MCQs
  answer: mongoose.Schema.Types.Mixed // optional default answer
});

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  headerImage: String, // optional header image URL
  questions: [questionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
