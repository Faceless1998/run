import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>{t('address')}</h3>
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>{t('phone')}</h3>
              <p>+1 234 567 890</p>
            </div>
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>{t('email')}</h3>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="contact-map">
            <h3 className="map-title">{t('location')}</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('location')}
            ></iframe>
          </div>
        </div>
        <div className="social-section">
          <h2>{t('followUs')}</h2>
          <p>{t('socialMedia')}</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 