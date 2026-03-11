import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResearchLibrary from './pages/ResearchLibrary';
import ResearchDetail from './pages/ResearchDetail';
import CategoryPage from './pages/CategoryPage';
import SpecialtyPage from './pages/SpecialtyPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<ResearchLibrary />} />
            <Route path="/research/:id" element={<ResearchDetail />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/specialty/:specialty" element={<SpecialtyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
