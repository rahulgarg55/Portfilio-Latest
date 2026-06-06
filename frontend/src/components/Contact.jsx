import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Youtube, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: null, error: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: data.message || 'Thank you! Your message was submitted successfully.',
          error: null
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form.');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: null,
        error: err.message || 'Something went wrong. Please check your connection and try again.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-tag">Connection Hub</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an interesting project, job opportunity, or simply want to talk tech? Shoot me a message and let's connect.
        </p>

        <div className="contact-grid">
          {/* Info Column */}
          <div className="contact-info-panel">
            <h3 className="info-title">Rahul Garg</h3>
            <p className="info-desc">
              Mid-Level Software Engineer & Technical Content Educator. Focused on scalability, databases, and microservices.
            </p>

            <div className="info-details">
              <div className="info-item">
                <Mail className="info-icon" size={18} />
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="mailto:gargr0109@gmail.com" className="info-val">gargr0109@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={18} />
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <a href="tel:+917807221279" className="info-val">+91 78072 21279</a>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon" size={18} />
                <div className="info-text">
                  <span className="info-label">Address</span>
                  <span className="info-val">Chandigarh IT Park, India</span>
                </div>
              </div>
            </div>

            <div className="info-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-badge-btn" title="GitHub">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-badge-btn" title="LinkedIn">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-badge-btn" title="YouTube Channel">
                <Youtube size={18} />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    disabled={status.submitting}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 99999 99999"
                    disabled={status.submitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  disabled={status.submitting}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell me about your project detail..."
                  rows="5"
                  disabled={status.submitting}
                  required
                ></textarea>
              </div>

              {status.success && (
                <div className="status-banner success">
                  <CheckCircle size={16} />
                  <span>{status.success}</span>
                </div>
              )}

              {status.error && (
                <div className="status-banner error">
                  <AlertCircle size={16} />
                  <span>{status.error}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={status.submitting}>
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Query</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .info-title {
          font-size: 28px;
          font-weight: 400;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .info-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 40px;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--accent-purple);
          margin-top: 4px;
        }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted-dark);
        }

        .info-val {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-dark);
          text-decoration: none;
          margin-top: 2px;
        }

        .info-val[href]:hover {
          color: var(--accent-purple);
          text-decoration: underline;
        }

        .info-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .social-badge-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          color: var(--text-muted-dark);
          transition: var(--transition-fast);
        }

        .social-badge-btn:hover {
          color: var(--accent-purple);
          border-color: rgba(94, 90, 209, 0.3);
          background-color: rgba(94, 90, 209, 0.04);
        }

        /* Form styling */
        .contact-form-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 10px 30px -10px rgba(17, 28, 45, 0.03);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .form-input {
          font-family: var(--font-sans);
          font-size: 14px;
          padding: 12px 16px;
          border: 1px solid rgba(17, 28, 45, 0.12);
          border-radius: 6px;
          outline: none;
          transition: var(--transition-fast);
          width: 100%;
        }

        .form-input:focus {
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(94, 90, 209, 0.12);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 10px;
        }

        .status-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
        }

        .status-banner.success {
          background-color: rgba(16, 185, 129, 0.08);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-banner.error {
          background-color: rgba(239, 68, 68, 0.08);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-form-panel {
            padding: 30px 20px;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
