import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import initialData from '../../data/research.json';

const AdminDashboard = () => {
  const [research, setResearch] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', category: '', abstract: '', specialty: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth
    const auth = localStorage.getItem('helthedia_auth');
    if (!auth) {
      navigate('/login');
      return;
    }

    // Load data from localStorage or initial
    const stored = localStorage.getItem('helthedia_research');
    if (stored) {
      setResearch(JSON.parse(stored));
    } else {
      setResearch(initialData);
    }
  }, [navigate]);

  const saveToLocal = (data) => {
    setResearch(data);
    localStorage.setItem('helthedia_research', JSON.stringify(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('helthedia_auth');
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      const updated = research.map(item => item.id === editingId ? { ...item, ...formData } : item);
      saveToLocal(updated);
      setEditingId(null);
    } else {
      const newItem = {
        id: Date.now(),
        ...formData,
        tags: [formData.category.toLowerCase()],
        featured: false
      };
      saveToLocal([newItem, ...research]);
    }
    setFormData({ title: '', category: '', abstract: '', specialty: '' });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({ title: item.title, category: item.category, abstract: item.abstract, specialty: item.specialty });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updated = research.filter(item => item.id !== id);
      saveToLocal(updated);
    }
  };

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fee2e2', color: '#dc2626' }}>
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div className="admin-form-section">
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2>{editingId ? 'Edit Entry' : 'Add New Research'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
                style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <input
                type="text"
                placeholder="Category (e.g. Medicine, Engineering)"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
                style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <input
                type="text"
                placeholder="Specialty (e.g. Genetics, Cardiology)"
                value={formData.specialty}
                onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                required
                style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <textarea
                placeholder="Abstract"
                value={formData.abstract}
                onChange={(e) => setFormData({...formData, abstract: e.target.value})}
                required
                rows="4"
                style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              ></textarea>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flexGrow: 1 }}>
                  {editingId ? 'Update Entry' : 'Add Entry'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => {setEditingId(null); setFormData({title: '', category: '', abstract: '', specialty: ''})}} className="btn">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="admin-list-section">
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2>Research Entries ({research.length})</h2>
            <div style={{ marginTop: '1rem', maxHeight: '600px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #f1f5f9', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem' }}>Title</th>
                    <th style={{ padding: '0.75rem' }}>Category</th>
                    <th style={{ padding: '0.75rem' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {research.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.75rem', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</td>
                      <td style={{ padding: '0.75rem' }}>{item.category}</td>
                      <td style={{ padding: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => handleEdit(item)} title="Edit" style={{ background: 'none', border: 'none', color: '#0369a1', cursor: 'pointer' }}>
                          <Edit size={18} />
                        </button>
                        <button onClick={() => handleDelete(item.id)} title="Delete" style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
