import React, { useState } from "react";

export default function FormBuilder() {
  const [headerImage, setHeaderImage] = useState(null);
  const [previewHeader, setPreviewHeader] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleHeaderChange = (e) => {
    const file = e.target.files[0];
    setHeaderImage(file);
    setPreviewHeader(URL.createObjectURL(file));
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        type: "", // categorize, cloze, comprehension
        text: "",
        image: null,
        imagePreview: null,
      },
    ]);
  };

  const updateQuestion = (id, key, value) => {
    const updated = questions.map((q) =>
      q.id === id ? { ...q, [key]: value } : q
    );
    setQuestions(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header Image Upload */}
      <div>
        <label className="block font-semibold mb-1">Header Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleHeaderChange}
          className="border p-2"
        />
        {previewHeader && (
          <img
            src={previewHeader}
            alt="Header Preview"
            className="mt-2 max-h-40 rounded border"
          />
        )}
      </div>

      {/* Questions List */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Questions</h2>
        {questions.map((q, idx) => (
          <div key={q.id} className="border p-4 rounded mb-4 space-y-2">
            <label className="block">
              Type:
              <select
                value={q.type}
                onChange={(e) => updateQuestion(q.id, "type", e.target.value)}
                className="ml-2 border px-2 py-1"
              >
                <option value="">Select</option>
                <option value="categorize">Categorize</option>
                <option value="cloze">Cloze</option>
                <option value="comprehension">Comprehension</option>
              </select>
            </label>

            <label className="block">
              Question Text:
              <input
                type="text"
                value={q.text}
                onChange={(e) => updateQuestion(q.id, "text", e.target.value)}
                className="w-full border px-2 py-1 mt-1"
              />
            </label>

            <label className="block">
              Image (optional):
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  updateQuestion(q.id, "image", file);
                  updateQuestion(q.id, "imagePreview", URL.createObjectURL(file));
                }}
                className="mt-1"
              />
              {q.imagePreview && (
                <img
                  src={q.imagePreview}
                  alt="Question Preview"
                  className="mt-2 max-h-32 border rounded"
                />
              )}
            </label>
          </div>
        ))}

        <button
          onClick={addQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Question
        </button>
      </div>
    </div>
  );
}
