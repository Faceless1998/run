import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Navbar.css';

const Navbar = () => {
  const { t, currentLang, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Run Georgia Logo" />
          <p>Botanical Garden run</p>
        </Link>

        <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('home')}
          </Link>
          <Link to="/about" className="navbar-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('about')}
          </Link>
          <Link to="/runs" className="navbar-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('runs')}
          </Link>
          <Link to="/results" className="navbar-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('results')}
          </Link>
          <Link to="/merch" className="navbar-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('merch')}
          </Link>
          {/* <Link to="/contact" className="navbar-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('contacts')}
          </Link>
          <Link to="/signin" className="signin-link" onClick={closeMenu} lang={currentLang === 'ka' ? 'ka' : undefined}>
            {t('signIn')}
          </Link> */}
          <div className="mobile-language-selector">
            <LanguageSelector 
              currentLang={currentLang} 
              onLanguageChange={changeLanguage} 
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar; 