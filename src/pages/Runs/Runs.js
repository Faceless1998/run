import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaTrophy, FaMoneyBillWave, FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageHeader from '../shared/PageHeader';
import './Runs.css';
import { useLanguage } from '../../context/LanguageContext';
import IMG from "./../../assets/1200 X 600.png"

const Runs = () => {
    const { t } = useLanguage();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'all', name: t('all') },
    { id: 'marathon', name: t('marathon') },
    { id: 'half-marathon', name: t('halfMarathon') },
    { id: '10k', name: t('tenK') },
    { id: '5k', name: t('fiveK') }
  ];

  const locations = [
    { id: 'all', name: t('allLocations') },
    { id: 'batumi', name: t('batumi') },
    { id: 'tbilisi', name: t('tbilisi') },
    { id: 'kutaisi', name: t('kutaisi') }
  ];

  const races = [
    // {
    //   id: 1,
    //   title: t('batumiSpringMarathon'),
    //   category: 'marathon',
    //   location: 'batumi',
    //   date: t('april15'),
    //   time: t('eightAM'),
    //   distance: t('fortyTwoKm'),
    //   price: t('seventyFiveGel'),
    //   participants: 500,
    //   prize: t('hundredGel'),
    //   image: 'https://placeholder.pics/svg/800x400/FFE4E1/FF69B4?text=Spring+Marathon',
    //   description: t('batumiSpringMarathonDesc'),
    //   features: [
    //     t('medalForFinishers'),
    //     t('timingChip'),
    //     t('refreshmentStations'),
    //     t('medicalSupport')
    //   ]
    // },
    {
      id: 2,
      title: t('tbilisiHalfMarathon'),
      category: 'kids',
      location: 'Batumi',
      date: t('may20'),
      time: t('tenAM'),
      distance: t('twentyOneKm'),
      price: t('sixtyGel'),
      participants: "∞",
      prize: t('sevenFiftyGel'),
      image: IMG,
      description: t('tbilisiHalfMarathonDesc'),
      features: [
        t('finisherMedal'),
        t('technicalTshirt'),
        t('postRaceRefreshments'),
        t('professionalTiming')
      ]
    },
    // {
    //   id: 3,
    //   title: t('kutaisiTenK'),
    //   category: '10k',
    //   location: 'kutaisi',
    //   date: t('june10'),
    //   time: t('tenAM'),
    //   distance: t('tenKm'),
    //   price: t('fortyFiveGel'),
    //   participants: 200,
    //   prize: t('fiveHundredGel'),
    //   image: 'https://placeholder.pics/svg/800x400/F0FFF0/10B981?text=10K+Challenge',
    //   description: t('kutaisiTenKDesc'),
    //   features: [
    //     t('participationMedal'),
    //     t('waterStations'),
    //     t('firstAidSupport'),
    //     t('electronicTiming')
    //   ]
    // },
    // {
    //   id: 4,
    //   title: t('batumiFiveK'),
    //   category: '5k',
    //   location: 'batumi',
    //   date: t('july5'),
    //   time: t('elevenAM'),
    //   distance: t('fiveKm'),
    //   price: t('thirtyGel'),
    //   participants: 150,
    //   prize: t('twoFiftyGel'),
    //   image: 'https://placeholder.pics/svg/800x400/FFF3E0/FF9800?text=5K+Fun+Run',
    //   description: t('batumiFiveKDesc'),
    //   features: [
    //     t('kidsMedal'),
    //     t('familyDiscounts'),
    //     t('waterStations'),
    //     t('safetyMarshals')
    //   ]
    // }
  ];

  const filteredRaces = races.filter(race => {
    const matchesSearch = race.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         race.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || race.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || race.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="runs-container">
      <PageHeader 
        title={t('upcomingEvents')}
        subtitle={t('findNextRace')}
      />

      <div className="container">
        <div className="runs-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder={t('search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters">
            <div className="filter-group">
              <FaFilter className="filter-icon" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <FaMapMarkerAlt className="filter-icon" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="filter-select"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="races-grid">
          {filteredRaces.map(race => (
            <div key={race.id} className="race-card">
              <div className="race-image-container">
                <img src={race.image} alt={race.title} className="race-image" />
                <div className="race-category">{t(race.category.replace('-', ''))}</div>
              </div>
              
              <div className="race-content">
                <h3 className="race-title">{race.title}</h3>
                <p className="race-description">{race.description}</p>
                
                <div className="race-details">
                  <div className="detail-item">
                    <FaCalendarAlt className="detail-icon" />
                    <span>{race.date}</span>
                  </div>
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    <span>{race.time}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{t(race.location)}</span>
                  </div>
                  <div className="detail-item">
                    <FaUsers className="detail-icon" />
                    <span>{race.participants} {t('participants')}</span>
                  </div>
                </div>

                <div className="race-features">
                  <h4>{t('raceFeatures')}</h4>
                  <ul>
                    {race.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="race-footer">
                  <div className="race-price">
                    <FaMoneyBillWave className="price-icon" />
                    <span>{race.price}</span>
                  </div>
                  <div className="race-prize">
                    <FaTrophy className="prize-icon" />
                    <span>{race.prize}</span>
                  </div>
                  <Link to={`/marathon-info/${race.id}`} className="see-more-button">
                    {t('seeMore')}
                    <FaArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Runs; 