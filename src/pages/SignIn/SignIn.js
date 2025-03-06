import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import PageHeader from '../shared/PageHeader';
import './SignIn.css';

const SignIn = () => {
  const { t, currentLang } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // TODO: Implement actual authentication logic here
      console.log('Sign in attempt:', formData);
      // For now, just navigate to home page
      navigate('/');
    } catch (err) {
      setError(t('signInError'));
    }
  };

  return (
    <div className="signin-container">
      <PageHeader 
        title={t('signIn')} 
        subtitle={t('signInSubtitle')}
        lang={currentLang === 'ka' ? 'ka' : undefined}
      />
      
      <div className="signin-content">
        <div className="signin-form-container">
          <form onSubmit={handleSubmit} className="signin-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('emailPlaceholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t('password')}</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder={t('passwordPlaceholder')}
              />
            </div>

            <button type="submit" className="submit-button">
              {t('signIn')}
            </button>

            <div className="form-footer">
              <p>{t('noAccount')} <Link to="/signup">{t('signUp')}</Link></p>
              <Link to="/forgot-password" className="forgot-password">
                {t('forgotPassword')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 