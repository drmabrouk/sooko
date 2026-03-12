import React from 'react';
import { Link } from 'react-router-dom';
import researchData from '../../data/research.json';

const FeaturedResearch = () => {
  // Filter for featured items
  const featured = researchData.filter(item => item.featured);

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Featured Research</h1>
        <p className="subtitle">Highlighted studies curated for their impact and scientific significance.</p>
      </header>

      <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {featured.map(study => (
          <div key={study.id} className="featured-card-expanded" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '8px', background: 'var(--primary-color)' }}></div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
              <span className="tag" style={{ alignSelf: 'start' }}>{study.category}</span>
              <h3 style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>{study.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>{study.abstract}</p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <Link to={`/research/${study.id}`} className="btn btn-primary" style={{ display: 'inline-block', textAlign: 'center', width: '100%' }}>
                  Read Full Study
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedResearch;
