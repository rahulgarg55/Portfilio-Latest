import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Error logging in');
    }
  };

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <div className="card" style={{ width: '400px' }}>
          <h2 className="section-title">Admin Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input 
              type="text" 
              placeholder="Username" 
              style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-light)' }}
              value={username} 
              onChange={e => setUsername(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-light)' }}
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <h1 className="section-title">Admin Dashboard</h1>
      <p className="section-subtitle">Welcome, {user.username}. You can manage portfolio items here.</p>
      
      <div className="card-grid">
        <div className="card">
          <h3>Manage Projects</h3>
          <p>Add, edit, or delete projects.</p>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }}>View Projects</button>
        </div>
        <div className="card">
          <h3>Manage Experience</h3>
          <p>Update your career timeline.</p>
          <button className="btn btn-secondary" style={{ marginTop: '16px' }}>View Experience</button>
        </div>
      </div>
    </div>
  );
}
