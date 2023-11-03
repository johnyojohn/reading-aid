// pages/index.js
import Layout from "../components/Layout";
import React, { useState } from "react";
import TextInputForm from "../components/TextInputForm";
import AnalysisResult from "../components/AnalysisResult";

const Home = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <Layout>
      <section>
        <TextInputForm onAnalysisComplete={setAnalysisResult} />
        {analysisResult && <AnalysisResult result={analysisResult} />}
      </section>
    </Layout>
  );
};

export default Home;
