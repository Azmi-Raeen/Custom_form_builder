import React from "react";
import FormBuilder from "../components/FormBuilder";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Custom Form Builder</h1>
      <FormBuilder />
    </div>
  );
}
