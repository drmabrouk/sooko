import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import researchData from '../data/research.json';

const ResearchLibrary = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(researchData.map(item => item.category))];

  const filteredData = filter === 'All'
    ? researchData
    : researchData.filter(item => item.category === filter);

  return (
    <div className="library-page container">
      <header className="page-header">
        <h1>Research Library</h1>
        <p>Browse our complete collection of scientific and medical studies.</p>
      </header>

      <div className="library-controls">
        <div className="filter-wrapper">
          <Filter size={18} />
          <span>Filter by Category:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="results-count">
          Showing {filteredData.length} results
        </div>
      </div>

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
    </div>
  );
};

export default ResearchLibrary;
