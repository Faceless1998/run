import React, { useState, useEffect } from 'react';
import PageHeader from '../shared/PageHeader';
import { FaSearch, FaTrophy, FaMedal, FaAward, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import resultsData from '../../data/results.json';
import './Results.css';
import { useLanguage } from '../../context/LanguageContext';

const Results = () => {
  const { t } = useLanguage();
  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('female');
  const [selectedRace, setSelectedRace] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'time', direction: 'asc' });

  useEffect(() => {
    let filteredResults = resultsData[`${selectedCategory}_results`] || [];
    
    if (selectedRace !== 'all') {
      filteredResults = filteredResults.filter(result => result.race === selectedRace);
    }
    
    if (searchQuery) {
      filteredResults = filteredResults.filter(result => 
        result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.team?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort results
    filteredResults.sort((a, b) => {
      if (sortConfig.key === 'time') {
        const timeA = a.chip_time.split(':').map(Number);
        const timeB = b.chip_time.split(':').map(Number);
        const timeAInSeconds = timeA[0] * 3600 + timeA[1] * 60 + timeA[2];
        const timeBInSeconds = timeB[0] * 3600 + timeB[1] * 60 + timeB[2];
        return sortConfig.direction === 'asc' ? timeAInSeconds - timeBInSeconds : timeBInSeconds - timeAInSeconds;
      }
      return sortConfig.direction === 'asc' 
        ? a[sortConfig.key].localeCompare(b[sortConfig.key])
        : b[sortConfig.key].localeCompare(a[sortConfig.key]);
    });

    setResults(filteredResults);
  }, [selectedCategory, selectedRace, searchQuery, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getMedalColor = (position) => {
    switch(position) {
      case 1: return 'gold';
      case 2: return 'silver';
      case 3: return 'bronze';
      default: return 'transparent';
    }
  };

  const raceCategories = [
    { name: "Elite Marathon", distance: "42.2km", price: "75₾", icon: "🏃‍♂️" },
    { name: "Half Marathon", distance: "21.1km", price: "60₾", icon: "🏃‍♀️" },
    { name: "10K Race", distance: "10km", price: "45₾", icon: "🏃" },
    { name: "5K Fun Run", distance: "5km", price: "30₾", icon: "🎯" }
  ];

  const prizes = [
    { position: "1st Place", prize: "1000₾ + Medal", icon: "🥇" },
    { position: "2nd Place", prize: "750₾ + Medal", icon: "🥈" },
    { position: "3rd Place", prize: "500₾ + Medal", icon: "🥉" },
    { position: "4-10th Place", prize: "Medal", icon: "🏅" }
  ];

  const registrationInfo = {
    deadline: "June 1, 2024",
    location: "Batumi Botanical Garden",
    price: "Early Bird: 50₾",
    spots: "Limited spots available"
  };

  return (
    <div className="results-container">
      <PageHeader 
        title={t('raceResults')} 
        subtitle={t('filterResults')}
      />
      
      <div className="container">
        <div className="results-controls">
          <div className="category-buttons">
            <button 
              className={`category-button ${selectedCategory === 'female' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('female')}
            >
              <img 
                src="https://placeholder.pics/svg/100x100/FFE4E1/FF69B4?text=F" 
                alt="Female runners" 
                className="category-image"
              />
              Female Results
            </button>
            <button 
              className={`category-button ${selectedCategory === 'male' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('male')}
            >
              <img 
                src="https://placeholder.pics/svg/100x100/E6F3FF/2563EB?text=M" 
                alt="Male runners" 
                className="category-image"
              />
              Male Results
            </button>
          </div>

          <div className="race-selector">
            <select 
              value={selectedRace}
              onChange={(e) => setSelectedRace(e.target.value)}
              className="race-select"
            >
              <option value="all">All Races</option>
              <option value="spring">Spring Marathon 2024</option>
              <option value="summer">Summer 10K</option>
              <option value="autumn">Autumn Half Marathon</option>
            </select>
          </div>

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name or team..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="results-stats">
          <div className="stat-card">
            <div className="stat-image-container">
              <img 
                src="https://placeholder.pics/svg/150x150/FFE4E1/FF69B4?text=Total" 
                alt="Total participants" 
                className="stat-image"
              />
              <FaTrophy className="stat-icon" />
            </div>
            <div className="stat-info">
              <h3>Total Participants</h3>
              <p>{results.length}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-image-container">
              <img 
                src="https://placeholder.pics/svg/150x150/E6F3FF/2563EB?text=Top3" 
                alt="Top finishers" 
                className="stat-image"
              />
              <FaMedal className="stat-icon" />
            </div>
            <div className="stat-info">
              <h3>Top 3 Finishers</h3>
              <p>{results.filter(r => r.number <= 3).length}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-image-container">
              <img 
                src="https://placeholder.pics/svg/150x150/F0FFF0/10B981?text=Teams" 
                alt="Teams" 
                className="stat-image"
              />
              <FaAward className="stat-icon" />
            </div>
            <div className="stat-info">
              <h3>Teams</h3>
              <p>{new Set(results.map(r => r.team)).size}</p>
            </div>
          </div>
        </div>

        <div className="race-info-grid">
          <div className="race-info-section categories-section">
            <h2 className="section-title">
              <FaUsers className="section-icon" />
              Race Categories
            </h2>
            <div className="categories-grid">
              {raceCategories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.distance}</p>
                    <span className="category-price">{category.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="race-info-section prizes-section">
            <h2 className="section-title">
              <FaTrophy className="section-icon" />
              Prizes
            </h2>
            <div className="prizes-grid">
              {prizes.map((prize, index) => (
                <div key={index} className="prize-card">
                  <div className="prize-icon">{prize.icon}</div>
                  <div className="prize-info">
                    <h3>{prize.position}</h3>
                    <p>{prize.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="race-info-section registration-section">
            <h2 className="section-title">
              <FaCalendarAlt className="section-icon" />
              Registration
            </h2>
            <div className="registration-card">
              <div className="registration-info">
                <div className="info-item">
                  <FaCalendarAlt className="info-icon" />
                  <div>
                    <h3>Deadline</h3>
                    <p>{registrationInfo.deadline}</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h3>Location</h3>
                    <p>{registrationInfo.location}</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaMoneyBillWave className="info-icon" />
                  <div>
                    <h3>Price</h3>
                    <p>{registrationInfo.price}</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaUsers className="info-icon" />
                  <div>
                    <h3>Availability</h3>
                    <p>{registrationInfo.spots}</p>
                  </div>
                </div>
              </div>
              <button className="register-button">Register Now</button>
            </div>
          </div>
        </div>

        <div className="results-table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('number')} className="sortable">
                  № {sortConfig.key === 'number' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('name')} className="sortable">
                  Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('category')} className="sortable">
                  Category {sortConfig.key === 'category' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('team')} className="sortable">
                  Team {sortConfig.key === 'team' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('time')} className="sortable">
                  Time {sortConfig.key === 'time' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('chip_time')} className="sortable">
                  Chip Time {sortConfig.key === 'chip_time' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('pace')} className="sortable">
                  Pace {sortConfig.key === 'pace' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((participant, index) => (
                <tr key={index} className="results-row">
                  <td>
                    <div className="position-cell">
                      <span className="position-number">{participant.number}</span>
                      {participant.number <= 3 && (
                        <FaMedal className="medal-icon" style={{ color: getMedalColor(participant.number) }} />
                      )}
                    </div>
                  </td>
                  <td>{participant.name}</td>
                  <td>{participant.category}</td>
                  <td>{participant.team || 'N/A'}</td>
                  <td>{participant.time}</td>
                  <td>{participant.chip_time}</td>
                  <td>{participant.pace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results; 