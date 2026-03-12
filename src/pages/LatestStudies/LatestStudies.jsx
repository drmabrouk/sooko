import React from 'react';
import { Link } from 'react-router-dom';
import researchData from '../../data/research.json';

const LatestStudies = () => {
  // In a real app, we'd sort by date. Here we'll just show the latest entries.
  const latestResearch = [...researchData].reverse();

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Latest Studies</h1>
        <p className="subtitle">Chronological listing of newly added research to the Helthedia library.</p>
      </header>

      <div className="research-list" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {latestResearch.map(study => (
          <div key={study.id} className="study-card" style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <span className="tag" style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                {study.category}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Added: Oct 2023</span>
            </div>
            <h3 style={{ fontSize: '1.4rem' }}>
              <Link to={`/research/${study.id}`} style={{ color: '#1e293b', textDecoration: 'none' }}>{study.title}</Link>
            </h3>
            <p style={{ color: '#475569', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {study.abstract}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              {study.tags.map(tag => (
                <span key={tag} style={{ fontSize: '0.75rem', color: '#94a3b8' }}>#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestStudies;
