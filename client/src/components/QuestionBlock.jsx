/*
import React from 'react';

const QuestionBlock = ({ question, index, onChange }) => {
  const handleInputChange = (field, value) => {
    const updatedQuestion = { ...question, [field]: value };
    onChange(index, updatedQuestion);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow mb-6">
      <label className="block font-semibold mb-1">Question Type:</label>
      <select
        value={question.type}
        onChange={(e) => handleInputChange('type', e.target.value)}
        className="w-full p-2 rounded border mb-3"
      >
        <option value="Categorize">Categorize</option>
        <option value="Cloze">Cloze</option>
        <option value="Comprehension">Comprehension</option>
      </select>

      <label className="block font-semibold mb-1">Question Text:</label>
      <input
        type="text"
        value={question.questionText}
        onChange={(e) => handleInputChange('questionText', e.target.value)}
        className="w-full p-2 rounded border mb-3"
      />

      <label className="block font-semibold mb-1">Image URL (optional):</label>
      <input
        type="text"
        value={question.image}
        onChange={(e) => handleInputChange('image', e.target.value)}
        className="w-full p-2 rounded border mb-3"
      />
*/
      {/* Question type-specific input blocks */}
      /*
      {question.type === 'Categorize' && (
        <div>
          <label className="block font-semibold mb-1">Categories:</label>
          {question.categories?.map((category, catIndex) => (
            <div key={catIndex} className="mb-3">
              <input
                type="text"
                placeholder="Category name"
                value={category.name}
                onChange={(e) => {
                  const updatedCategories = [...question.categories];
                  updatedCategories[catIndex].name = e.target.value;
                  handleInputChange('categories', updatedCategories);
                }}
                className="w-full p-2 rounded border mb-1"
              />
              <textarea
                placeholder="Comma-separated items"
                value={category.items?.join(', ') || ''}
                onChange={(e) => {
                  const updatedCategories = [...question.categories];
                  updatedCategories[catIndex].items = e.target.value.split(',').map(i => i.trim());
                  handleInputChange('categories', updatedCategories);
                }}
                className="w-full p-2 rounded border"
              />
            </div>
          ))}
          <button
            onClick={() => {
              const newCategories = [...(question.categories || []), { name: '', items: [] }];
              handleInputChange('categories', newCategories);
            }}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            + Add Category
          </button>
        </div>
      )}

      {question.type === 'Cloze' && (
        <div className="mb-3">
          <label className="block font-semibold mb-1">Cloze Text:</label>
          <textarea
            value={question.clozeText}
            onChange={(e) => handleInputChange('clozeText', e.target.value)}
            className="w-full p-2 rounded border"
          />
        </div>
      )}

      {question.type === 'Comprehension' && (
        <div>
          <label className="block font-semibold mb-1">Passage:</label>
          <textarea
            value={question.passage}
            onChange={(e) => handleInputChange('passage', e.target.value)}
            className="w-full p-2 rounded border mb-3"
          />

          <label className="block font-semibold mb-1">MCQs:</label>
          {question.mcqs?.map((mcq, mcqIndex) => (
            <div key={mcqIndex} className="mb-3">
              <input
                type="text"
                placeholder="Question"
                value={mcq.question}
                onChange={(e) => {
                  const updatedMCQs = [...question.mcqs];
                  updatedMCQs[mcqIndex].question = e.target.value;
                  handleInputChange('mcqs', updatedMCQs);
                }}
                className="w-full p-2 rounded border mb-1"
              />
              <textarea
                placeholder="Comma-separated options"
                value={mcq.options?.join(', ') || ''}
                onChange={(e) => {
                  const updatedMCQs = [...question.mcqs];
                  updatedMCQs[mcqIndex].options = e.target.value.split(',').map(opt => opt.trim());
                  handleInputChange('mcqs', updatedMCQs);
                }}
                className="w-full p-2 rounded border"
              />
            </div>
          ))}
          <button
            onClick={() => {
              const newMCQs = [...(question.mcqs || []), { question: '', options: [] }];
              handleInputChange('mcqs', newMCQs);
            }}
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            + Add MCQ
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionBlock;
*/
// src/components/QuestionBlock.jsx

import React from "react";

const QuestionBlock = ({ question, index, handleQuestionChange, handleRemoveQuestion }) => {
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    handleQuestionChange(index, name, name === "image" ? files[0] : value);
  };

  const handleOptionChange = (optionIndex, value) => {
    const newOptions = [...question.options];
    newOptions[optionIndex] = value;
    handleQuestionChange(index, "options", newOptions);
  };

  const addOption = () => {
    handleQuestionChange(index, "options", [...question.options, ""]);
  };

  const removeOption = (optionIndex) => {
    const newOptions = [...question.options];
    newOptions.splice(optionIndex, 1);
    handleQuestionChange(index, "options", newOptions);
  };

  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow hover:shadow-md transition duration-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Question {index + 1}</h2>
        <button
          onClick={() => handleRemoveQuestion(index)}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Remove
        </button>
      </div>

      {/* Question Text */}
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Question Text</label>
        <input
          type="text"
          name="text"
          value={question.text}
          onChange={handleInputChange}
          placeholder="Enter your question..."
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Question Type */}
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Question Type</label>
        <select
          name="type"
          value={question.type}
          onChange={handleInputChange}
          className="w-full p-2 border rounded bg-white focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="categorize">Categorize</option>
          <option value="cloze">Cloze</option>
          <option value="comprehension">Comprehension</option>
        </select>
      </div>

      {/* Image Upload */}
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Upload Image (optional)</label>
        <input
          type="file"
          name="image"
          onChange={handleInputChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
        {question.image && typeof question.image === "string" && (
          <img
            src={question.image}
            alt="Question"
            className="mt-2 max-h-40 rounded"
          />
        )}
      </div>

      {/* Options - only for comprehension type */}
      
      {question.type === "comprehension" && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Options</label>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(optionIndex, e.target.value)}
                placeholder={`Option ${optionIndex + 1}`}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                onClick={() => removeOption(optionIndex)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={addOption}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionBlock;

