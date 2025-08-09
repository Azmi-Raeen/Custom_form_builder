/*
import React from 'react';

const PreviewForm = ({ formData }) => {
  if (!formData) return <p className="text-gray-500">No form data available for preview.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      {formData.headerImage && (
        <img src={formData.headerImage} alt="Form Header" className="w-full h-40 object-cover rounded" />
      )}
      <h2 className="text-2xl font-bold mb-4">{formData.title || 'Untitled Form'}</h2>

      {formData.questions && formData.questions.map((question, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <h3 className="text-lg font-semibold">{index + 1}. {question.questionText}</h3>
          {question.image && (
            <img src={question.image} alt={`Question ${index + 1}`} className="mt-2 w-full h-32 object-contain" />
          )}

          {question.type === 'Categorize' && (
            <div className="mt-2">
              {question.categories?.map((category, catIndex) => (
                <div key={catIndex} className="mb-2">
                  <strong>{category.name}:</strong>
                  <ul className="list-disc ml-5">
                    {category.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {question.type === 'Cloze' && (
            <p className="mt-2 italic">{question.clozeText}</p>
          )}

          {question.type === 'Comprehension' && (
            <div className="mt-2">
              <p className="mb-2">{question.passage}</p>
              <ul className="list-disc ml-5">
                {question.mcqs?.map((mcq, mcqIndex) => (
                  <li key={mcqIndex}>
                    <strong>Q:</strong> {mcq.question} <br />
                    <strong>Options:</strong> {mcq.options?.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PreviewForm;
*/
// src/components/PreviewForm.jsx
import React from "react";

const PreviewForm = ({ formData }) => {
  if (!formData) return <p className="text-center text-gray-500">No form to preview</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Image */}
      {formData.headerImage && (
        <img
          src={formData.headerImage}
          alt="Form Header"
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />
      )}

      {/* Form Title */}
      <h1 className="text-3xl font-bold text-center mb-4">{formData.title}</h1>

      {/* Questions */}
      <div className="space-y-6">
        {formData.questions.map((question, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-200"
          >
            {/* Question Header */}
            <div className="flex items-start gap-4">
              {question.image && (
                <img
                  src={question.image}
                  alt={`Q${index + 1}`}
                  className="w-24 h-24 object-cover rounded"
                />
              )}
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  Q{index + 1}. {question.text}
                </h2>

                {/* Option rendering based on type */}
                {question.type === "categorize" && (
                  <div className="text-gray-700 italic">Categorize question</div>
                )}

                {question.type === "cloze" && (
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    className="mt-2 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                )}

                {question.type === "comprehension" && question.options && (
                  <div className="mt-2 space-y-2">
                    {question.options.map((option, i) => (
                      <label
                        key={i}
                        className="block px-4 py-2 border border-gray-200 rounded hover:bg-blue-50 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewForm;

