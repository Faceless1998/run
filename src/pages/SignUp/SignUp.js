import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import PageHeader from '../shared/PageHeader';
import './SignUp.css';

const SignUp = () => {
  const { t, currentLang } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      setError(t('passwordMismatch'));
      return;
    }
    
    try {
      // TODO: Implement actual registration logic here
      console.log('Sign up attempt:', formData);
      // For now, just navigate to home page
      navigate('/');
    } catch (err) {
      setError(t('signUpError'));
    }
  };

  return (
    <div className="signup-container">
      <PageHeader 
        title={t('signUp')} 
        subtitle={t('signUpSubtitle')}
        lang={currentLang === 'ka' ? 'ka' : undefined}
      />
      
      <div className="signup-content">
        <div className="signup-form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="name">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('name')}
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="confirmPassword">{t('confirmPassword')}</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder={t('confirmPasswordPlaceholder')}
              />
            </div>

            <button type="submit" className="submit-button">
              {t('signUp')}
            </button>

            <div className="form-footer">
              <p>{t('alreadyHaveAccount')} <Link to="/signin">{t('signIn')}</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 