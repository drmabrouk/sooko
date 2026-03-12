import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p className="subtitle">Have questions or feedback? We'd love to hear from you.</p>
      </header>

      {submitted ? (
        <div className="success-message" style={{ textAlign: 'center', padding: '3rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0', color: '#166534' }}>
          <h2>Message Sent Successfully!</h2>
          <p>Thank you for reaching out to Helthedia. Our team will get back to you shortly.</p>
          <button className="btn" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>Send Another Message</button>
        </div>
      ) : (
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem', fontSize: '1rem' }}>Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Support Email</h3>
              <p>support@helthedia.org</p>
            </div>
            <div className="info-item" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Press Inquiries</h3>
              <p>press@helthedia.org</p>
            </div>
            <div className="info-item" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Headquarters</h3>
              <p>Scientific Research Hub<br />Innovation Way, 42<br />Silicon Valley, CA</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
