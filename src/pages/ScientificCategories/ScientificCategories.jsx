import React from 'react';
import { Link } from 'react-router-dom';
import researchData from '../../data/research.json';

const ScientificCategories = () => {
  // Extract unique categories
  const categories = [...new Set(researchData.map(item => item.category))];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Scientific Categories</h1>
        <p className="subtitle">Explore our diverse range of research disciplines.</p>
      </header>

      <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {categories.map(category => (
          <Link key={category} to={`/category/${category}`} className="category-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center', transition: 'transform 0.2s' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#1e293b' }}>{category}</h3>
              <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
                {researchData.filter(r => r.category === category).length} Articles
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScientificCategories;
