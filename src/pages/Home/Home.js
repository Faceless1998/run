import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>{t('welcomeTitle')}</h1>
        <p>{t('welcomeSubtitle')}</p>
        <a href="https://tkt.ge/show/21677" target='_blank' className="button button-primary">{t('viewAllRaces')}</a>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2>{t('whyChooseUs')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>{t('trackProgress')}</h3>
              <p>{t('trackProgressDesc')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('findEvents')}</h3>
              <p>{t('findEventsDesc')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('connectRunners')}</h3>
              <p>{t('connectRunnersDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 