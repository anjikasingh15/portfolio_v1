import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// ─── Replace these with your EmailJS credentials ──────────────────────────────
const EMAILJS_SERVICE_ID = 'service_jkotscu';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_jsz9v5b';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'Jhcp8eN6ZuDAFDtON';   // e.g. 'abc123XYZ'
// ──────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="reveal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ── Contact Info ── */}
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-text-secondary mb-8">
              Open to new opportunities, collaborations, or technical discussions.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-lg text-accent-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <a href="mailto:anjikasingh03@gmail.com" className="font-bold hover:text-accent-primary transition-all">
                    anjikasingh03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-lg text-accent-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <a href="tel:+919918396738" className="font-bold hover:text-accent-secondary transition-all">
                    +91 9918396738
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-lg text-accent-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-bold">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 flex flex-col gap-6">

            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-bg-color/50 border border-border rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-primary transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-bg-color/50 border border-border rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-primary transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full bg-bg-color/50 border border-border rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-primary transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* ── Status feedback ── */}
            {status === 'success' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.75rem 1rem', borderRadius: '0.5rem',
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.3)',
                color: 'var(--accent-primary)', fontSize: '0.9rem',
              }}>
                <CheckCircle size={18} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.75rem 1rem', borderRadius: '0.5rem',
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#ef4444', fontSize: '0.9rem',
              }}>
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn btn-primary flex items-center justify-center gap-2"
              style={{
                opacity: status === 'loading' || status === 'success' ? 0.7 : 1,
                cursor: status === 'loading' || status === 'success' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? (
                <>
                  <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={18} />
                  Sent!
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Spinner keyframe */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Contact;
