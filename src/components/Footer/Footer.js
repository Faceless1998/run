import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('aboutUs')}</h3>
            <p>{t('footerAboutText')}</p>
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
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t('quickLinks')}</h3>
            <ul>
              <li><Link to="/">{t('home')}</Link></li>
              <li><Link to="/about">{t('about')}</Link></li>
              <li><Link to="/runs">{t('runs')}</Link></li>
              <li><Link to="/results">{t('results')}</Link></li>
              <li><Link to="/merch">{t('merch')}</Link></li>
              <li><Link to="/contacts">{t('contacts')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('contactInfo')}</h3>
            <ul className="contact-info">
              <li>
                <strong>{t('address')}:</strong>
                <span>123 Running Street, Tbilisi, Georgia</span>
              </li>
              <li>
                <strong>{t('phone')}:</strong>
                <span>+995 555 123 456</span>
              </li>
              <li>
                <strong>{t('email')}:</strong>
                <span>info@rungenia.ge</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('newsletter')}</h3>
            <p>{t('newsletterText')}</p>
            <form className="newsletter-form">
              <input type="email" placeholder={t('email')} />
              <button type="submit">{t('subscribe')}</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Run Georgia. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 