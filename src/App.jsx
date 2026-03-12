import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ResearchLibrary from './pages/ResearchLibrary/ResearchLibrary';
import ResearchDetail from './pages/ResearchDetail/ResearchDetail';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SpecialtyPage from './pages/SpecialtyPage/SpecialtyPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ScientificCategories from './pages/ScientificCategories/ScientificCategories';
import LatestStudies from './pages/LatestStudies/LatestStudies';
import FeaturedResearch from './pages/FeaturedResearch/FeaturedResearch';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminDashboard from './pages/Admin/AdminDashboard';

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<ScientificCategories />} />
            <Route path="/latest" element={<LatestStudies />} />
            <Route path="/featured" element={<FeaturedResearch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
