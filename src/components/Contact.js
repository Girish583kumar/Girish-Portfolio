import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
    } else {
      setFormStatus('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-details">
        <p><strong>Email:</strong> girish573kumar@gmail.com</p>
        <p><strong>Phone:</strong> +91-6302737269</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
