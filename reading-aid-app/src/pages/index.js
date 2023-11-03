// pages/index.js

import React, { useState } from "react";
import TextInputForm from "../components/TextInputForm";
import AnalysisResult from "../components/AnalysisResult";

const Home = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div>
      <h1>Text Analysis Tool</h1>
      <TextInputForm onAnalysisComplete={setAnalysisResult} />
      {analysisResult && <AnalysisResult result={analysisResult} />}
    </div>
  );
};

export default Home;
