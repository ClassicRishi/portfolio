'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }

    setTimeout(() => {
      if (status !== 'sending') setStatus('');
    }, 5000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <h2 className={styles.sectionTitle}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Let's talk about everything!</h3>
            <p className={styles.infoText}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className={styles.emailWrapper}>
              <span>Email:</span>
              <a href="mailto:rishi.kaveri037@gmail.com" className="gradient-text">rishi.kaveri037@gmail.com</a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className={styles.input}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                placeholder="Your Message" 
                rows={5} 
                required 
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`glass-btn-primary ${styles.submitBtn} ${status === 'sending' ? styles.sending : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
