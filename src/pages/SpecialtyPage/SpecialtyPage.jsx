import React from 'react';
import { useParams, Link } from 'react-router-dom';
import researchData from '../../data/research.json';

const SpecialtyPage = () => {
  const { specialty } = useParams();
  const filteredData = researchData.filter(item => item.specialty === specialty);

  return (
    <div className="container">
      <header className="page-header">
        <h1>{specialty} Specialty</h1>
        <p>Focused research and clinical studies within {specialty}.</p>
      </header>

      <div className="research-grid">
        {filteredData.map((item) => (
          <Link to={`/research/${item.id}`} key={item.id} className="research-card">
            <div className="card-badge">{item.category}</div>
            <h3>{item.title}</h3>
            <p>{item.abstract.substring(0, 150)}...</p>
            <div className="card-footer">
              <span>{item.author}</span>
              <span>{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
      {filteredData.length === 0 && <p>No research found for this specialty.</p>}
    </div>
  );
};

export default SpecialtyPage;
