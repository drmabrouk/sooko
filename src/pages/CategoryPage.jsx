import React from 'react';
import { useParams, Link } from 'react-router-dom';
import researchData from '../data/research.json';

const CategoryPage = () => {
  const { category } = useParams();
  const filteredData = researchData.filter(item => item.category === category);

  return (
    <div className="container">
      <header className="page-header">
        <h1>{category} Research</h1>
        <p>Scientific exploration and studies in the field of {category}.</p>
      </header>

      <div className="research-grid">
        {filteredData.map((item) => (
          <Link to={`/research/${item.id}`} key={item.id} className="research-card">
            <div className="card-badge">{item.specialty}</div>
            <h3>{item.title}</h3>
            <p>{item.abstract.substring(0, 150)}...</p>
            <div className="card-footer">
              <span>{item.author}</span>
              <span>{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
      {filteredData.length === 0 && <p>No research found for this category.</p>}
    </div>
  );
};

export default CategoryPage;
