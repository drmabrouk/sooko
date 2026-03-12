import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Clock } from 'lucide-react';
import Search from '../../components/Search';
import initialData from '../../data/research.json';

const Home = () => {
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('helthedia_research');
    if (stored) {
      setResearchData(JSON.parse(stored));
    } else {
      setResearchData(initialData);
    }
  }, []);

  const featured = researchData.slice(0, 3);
  const latest = researchData.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the Frontier of Science</h1>
          <p>Access a comprehensive library of medical and scientific research, categorized by specialty and updated daily.</p>
          <Search />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <Star className="icon" />
              <h2>Featured Research</h2>
            </div>
            <Link to="/library" className="view-all">
              View Library <ArrowRight size={16} />
            </Link>
          </div>
          <div className="research-grid">
            {featured.map((item) => (
              <Link to={`/research/${item.id}`} key={item.id} className="research-card">
                <div className="card-badge">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.abstract.substring(0, 100)}...</p>
                <div className="card-footer">
                  <span>{item.author || 'Helthedia Research'}</span>
                  <span>{item.date || 'New'}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <Clock className="icon" />
              <h2>Latest Studies</h2>
            </div>
          </div>
          <div className="latest-list">
            {latest.map((item) => (
              <Link to={`/research/${item.id}`} key={item.id} className="latest-item">
                <div className="latest-info">
                  <h4>{item.title}</h4>
                  <span>{item.specialty} • {item.date || 'New'}</span>
                </div>
                <BookOpen size={20} className="latest-icon" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
