import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import lunr from 'lunr';
import { Search as SearchIcon } from 'lucide-react';
import researchData from '../data/research.json';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [idx, setIdx] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const index = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('abstract');
      this.field('category');
      this.field('specialty');
      this.field('tags');

      researchData.forEach(function (doc) {
        this.add(doc);
      }, this);
    });
    setIdx(index);
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (idx && val.length > 2) {
      const searchResults = idx.search(val).map((result) => {
        return researchData.find((doc) => doc.id === result.ref);
      });
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (id) => {
    navigate(`/research/${id}`);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <SearchIcon className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search research, medical specialties, categories..."
          value={query}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      {results.length > 0 && (
        <div className="search-results">
          {results.slice(0, 5).map((result) => (
            <div
              key={result.id}
              className="search-result-item"
              onClick={() => handleResultClick(result.id)}
            >
              <div className="result-title">{result.title}</div>
              <div className="result-meta">
                {result.category} • {result.specialty}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
