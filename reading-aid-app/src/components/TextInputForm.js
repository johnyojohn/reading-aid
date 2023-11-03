// components/TextInputForm.js

import React, { useState } from "react";
import { partOfSpeechTagging } from "../services/partOfSpeechTagging";

const TextInputForm = ({ onAnalysisComplete }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const analysisResult = await partOfSpeechTagging(inputText);
      onAnalysisComplete(analysisResult);
    } catch (error) {
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full p-4 h-48 resize-none border rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text to analyze..."
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Analyze Text
      </button>
    </form>
  );
};

export default TextInputForm;
