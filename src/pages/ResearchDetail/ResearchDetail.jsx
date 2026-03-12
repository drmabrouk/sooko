import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronLeft, Download, Share2 } from 'lucide-react';
import researchData from '../../data/research.json';

const ResearchDetail = () => {
  const { id } = useParams();
  const research = researchData.find(item => item.id === id);

  if (!research) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Research not found</h2>
        <Link to="/library" className="view-all" style={{ justifyContent: 'center', marginTop: '1rem' }}>
          Back to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="research-detail container">
      <Link to="/library" className="back-link">
        <ChevronLeft size={18} /> Back to Library
      </Link>

      <article className="research-article">
        <header className="article-header">
          <div className="card-badge">{research.category}</div>
          <h1>{research.title}</h1>

          <div className="article-meta">
            <div className="meta-item">
              <User size={16} />
              <span>{research.author}</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>{research.date}</span>
            </div>
            <div className="meta-item">
              <Tag size={16} />
              <span>{research.specialty}</span>
            </div>
          </div>
        </header>

        <section className="article-section">
          <h2>Abstract</h2>
          <p className="abstract-text">{research.abstract}</p>
        </section>

        <section className="article-section">
          <h2>Full Content</h2>
          <div className="content-text">
            {research.content}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>

        <footer className="article-footer">
          <div className="tags-list">
            {research.tags.map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <div className="article-actions">
            <button className="btn btn-primary">
              <Download size={18} /> Download PDF
            </button>
            <button className="btn btn-secondary">
              <Share2 size={18} /> Share
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ResearchDetail;
