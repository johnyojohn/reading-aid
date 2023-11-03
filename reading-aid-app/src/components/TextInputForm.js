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
    <form onSubmit={handleSubmit}>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Analyze Text</button>
    </form>
  );
};

export default TextInputForm;
