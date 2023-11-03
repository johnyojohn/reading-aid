// components/AnalysisResult.js

const AnalysisResult = ({ result }) => {
  return (
    <div className="mt-8 p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold mb-4">Analysis Result</h2>
      <ul className="list-disc list-inside">
        {result.analysis.map((item, index) => (
          <li key={index} className="mb-1">
            <span className="font-medium">{item.word}:</span>{" "}
            {item.part_of_speech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalysisResult;
