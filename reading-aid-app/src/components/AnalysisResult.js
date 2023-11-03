// components/AnalysisResult.js

const AnalysisResult = ({ result }) => {
  return (
    <div>
      <h2>Analysis Result</h2>
      <ul>
        {result.analysis.map((item, index) => (
          <li key={index}>
            {item.word}: {item.part_of_speech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalysisResult;
