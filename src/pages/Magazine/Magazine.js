import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageHeader from '../shared/PageHeader';
import './Magazine.css';

const Magazine = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('all') },
    { id: 'training', name: t('training') },
    { id: 'nutrition', name: t('nutrition') },
    { id: 'gear', name: t('gear') },
    { id: 'events', name: t('events') }
  ];

  const articles = [
    {
      id: 1,
      title: 'Training Tips for Marathon Success',
      category: 'training',
      date: '2024-03-15',
      author: 'John Smith',
      excerpt: 'Learn the essential training strategies to prepare for your next marathon...',
      image: '/images/articles/training-tips.jpg'
    },
    // Add more articles here
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="magazine-container">
      <PageHeader 
        title={t('runningMagazine')}
        subtitle={t('latestArticles')}
      />

      <div className="container">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="category">{t(article.category)}</span>
                  <span className="date">{article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="author">{t('by')} {article.author}</p>
                <p className="excerpt">{article.excerpt}</p>
                <a href={`/magazine/${article.id}`} className="read-more">
                  {t('readMore')} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazine; 