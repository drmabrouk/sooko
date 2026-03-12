import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>About Helthedia</h1>
        <p className="subtitle">Advancing human knowledge through accessible scientific and medical research.</p>
      </header>

      <section className="page-section">
        <h2>Our Mission</h2>
        <p>
          Helthedia was founded with a single goal: to bridge the gap between complex scientific discoveries
          and the global community. We believe that access to high-quality, peer-reviewed research
          is a fundamental right that drives progress in medicine, technology, and society.
        </p>
      </section>

      <section className="page-section">
        <h2>The Platform</h2>
        <p>
          Our modular, incrementally extendable system provides a comprehensive library of medical and scientific
          research. Using advanced client-side search technology, Helthedia enables researchers, students,
          and the public to find critical information quickly and efficiently.
        </p>
      </section>

      <section className="page-section">
        <h2>Open Science</h2>
        <p>
          We are committed to the principles of open science and data transparency. By hosting a wide array
          of research categories and specialties, we ensure that interdisciplinary connections can be made
          to solve the world's most pressing health and scientific challenges.
        </p>
      </section>
    </div>
  );
};

export default About;
