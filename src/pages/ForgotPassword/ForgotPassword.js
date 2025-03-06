import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import PageHeader from '../shared/PageHeader';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const { t, currentLang } = useLanguage();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    try {
      // TODO: Implement actual password reset logic here
      console.log('Password reset attempt:', email);
      setSuccess(true);
    } catch (err) {
      setError(t('resetPasswordError'));
    }
  };

  return (
    <div className="forgot-password-container">
      <PageHeader 
        title={t('forgotPassword')} 
        subtitle={t('forgotPasswordSubtitle')}
        lang={currentLang === 'ka' ? 'ka' : undefined}
      />
      
      <div className="forgot-password-content">
        <div className="forgot-password-form-container">
          <form onSubmit={handleSubmit} className="forgot-password-form">
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{t('resetPasswordSent')}</div>}
            
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t('emailPlaceholder')}
              />
            </div>

            <button type="submit" className="submit-button">
              {t('resetPassword')}
            </button>

            <div className="form-footer">
              <Link to="/signin" className="back-link">
                {t('backToSignIn')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 