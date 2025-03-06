import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { currentLang, changeLanguage } = useLanguage();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'ka', name: 'ქართული' }
  ];

  return (
    <div className="language-selector">
      <FaGlobe className="globe-icon" />
      <select 
        value={currentLang} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector; 