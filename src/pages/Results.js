import React, { useState, useEffect } from 'react';
import './Results.css'; // Import the custom CSS file
import resultsData from './results.json';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(resultsData.female_results);
  }, []);

  return (
    <div className="results-container">
      <h1 className="results-title">Race Results</h1>
      <table className="results-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Category</th>
            <th>Team</th>
            <th>Time</th>
            <th>Chip Time</th>
            <th>Pace</th>
          </tr>
        </thead>
        <tbody>
          {results.map((participant, index) => (
            <tr key={index} className="results-row">
              <td>{participant.number}</td>
              <td>{participant.name}</td>
              <td>{participant.category}</td>
              <td>{participant.team || 'N/A'}</td>
              <td>{participant.time}</td>
              <td>{participant.chip_time}</td>
              <td>{participant.pace}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
