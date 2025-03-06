import React from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaTrophy, FaMoneyBillWave, FaRoute, FaMedal, FaTshirt, FaWater, FaFirstAid, FaParking, FaBus } from 'react-icons/fa';
import PageHeader from '../shared/PageHeader';
import './MarathonInfo.css';

const MarathonInfo = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const marathonInfo = {
    id: parseInt(id),
    title: 'Batumi Spring Marathon 2024',
    date: 'April 15, 2024',
    time: '08:00 AM',
    location: 'Batumi, Georgia',
    distance: '42.2 km',
    price: '75₾',
    participants: 500,
    prize: '1000₾',
    image: 'https://placeholder.pics/svg/1200x400/FFE4E1/FF69B4?text=Spring+Marathon',
    description: 'Experience the beauty of Batumi in this spring marathon. The course takes you along the stunning Black Sea coastline, through historic streets, and past iconic landmarks.',
    course: {
      start: 'Batumi Boulevard',
      finish: 'Batumi Stadium',
      elevation: 'Flat to moderate',
      surface: 'Paved roads and paths',
      highlights: [
        'Black Sea coastline views',
        'Historic city center',
        'Botanical Garden section',
        'Modern architecture district'
      ]
    },
    schedule: [
      { time: '06:00 AM', activity: 'Registration opens' },
      { time: '07:00 AM', activity: 'Bag drop opens' },
      { time: '07:30 AM', activity: 'Warm-up session' },
      { time: '08:00 AM', activity: 'Race starts' },
      { time: '11:00 AM', activity: 'Award ceremony' },
      { time: '12:00 PM', activity: 'Post-race celebration' }
    ],
    amenities: [
      { icon: FaMedal, title: 'Finisher Medal', description: 'Custom-designed medal for all finishers' },
      { icon: FaTshirt, title: 'Technical T-shirt', description: 'High-quality performance shirt' },
      { icon: FaWater, title: 'Water Stations', description: 'Every 5km with sports drinks' },
      { icon: FaFirstAid, title: 'Medical Support', description: 'Full medical team on course' },
      { icon: FaParking, title: 'Free Parking', description: 'Designated parking areas' },
      { icon: FaBus, title: 'Shuttle Service', description: 'To and from key locations' }
    ],
    registration: {
      deadline: 'April 1, 2024',
      price: {
        early: '75₾',
        regular: '90₾',
        late: '100₾'
      },
      includes: [
        'Race entry',
        'Technical t-shirt',
        'Finisher medal',
        'Timing chip',
        'Race bib',
        'Post-race refreshments'
      ]
    },
    prizes: [
      { position: '1st Place', prize: '1000₾ + Medal' },
      { position: '2nd Place', prize: '750₾ + Medal' },
      { position: '3rd Place', prize: '500₾ + Medal' },
      { position: '4-10th Place', prize: 'Medal' }
    ]
  };

  return (
    <div className="marathon-info-container">
      <PageHeader 
        title={marathonInfo.title}
        subtitle="Complete information about the marathon"
      />

      <div className="container">
        <div className="marathon-hero">
          <img src={marathonInfo.image} alt={marathonInfo.title} className="marathon-hero-image" />
          <div className="marathon-hero-overlay">
            <div className="marathon-hero-content">
              <h1>{marathonInfo.title}</h1>
              <div className="marathon-hero-details">
                <span><FaCalendarAlt /> {marathonInfo.date}</span>
                <span><FaClock /> {marathonInfo.time}</span>
                <span><FaMapMarkerAlt /> {marathonInfo.location}</span>
                <span><FaUsers /> {marathonInfo.participants} participants</span>
              </div>
            </div>
          </div>
        </div>

        <div className="marathon-content">
          <section className="marathon-section">
            <h2>About the Race</h2>
            <p>{marathonInfo.description}</p>
          </section>

          <section className="marathon-section">
            <h2>Course Information</h2>
            <div className="course-info">
              <div className="course-details">
                <div className="course-item">
                  <FaRoute className="course-icon" />
                  <div>
                    <h3>Start & Finish</h3>
                    <p>Start: {marathonInfo.course.start}</p>
                    <p>Finish: {marathonInfo.course.finish}</p>
                  </div>
                </div>
                <div className="course-item">
                  <FaMapMarkerAlt className="course-icon" />
                  <div>
                    <h3>Course Profile</h3>
                    <p>Elevation: {marathonInfo.course.elevation}</p>
                    <p>Surface: {marathonInfo.course.surface}</p>
                  </div>
                </div>
              </div>
              <div className="course-highlights">
                <h3>Course Highlights</h3>
                <ul>
                  {marathonInfo.course.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="marathon-section">
            <h2>Race Schedule</h2>
            <div className="schedule-timeline">
              {marathonInfo.schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-activity">{item.activity}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="marathon-section">
            <h2>Race Amenities</h2>
            <div className="amenities-grid">
              {marathonInfo.amenities.map((amenity, index) => (
                <div key={index} className="amenity-card">
                  <amenity.icon className="amenity-icon" />
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="marathon-section">
            <h2>Registration</h2>
            <div className="registration-info">
              <div className="registration-details">
                <h3>Registration Deadline</h3>
                <p>{marathonInfo.registration.deadline}</p>
                <div className="registration-prices">
                  <div className="price-item">
                    <span>Early Bird:</span>
                    <span>{marathonInfo.registration.price.early}</span>
                  </div>
                  <div className="price-item">
                    <span>Regular:</span>
                    <span>{marathonInfo.registration.price.regular}</span>
                  </div>
                  <div className="price-item">
                    <span>Late:</span>
                    <span>{marathonInfo.registration.price.late}</span>
                  </div>
                </div>
              </div>
              <div className="registration-includes">
                <h3>Registration Includes</h3>
                <ul>
                  {marathonInfo.registration.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="marathon-section">
            <h2>Prizes</h2>
            <div className="prizes-grid">
              {marathonInfo.prizes.map((prize, index) => (
                <div key={index} className="prize-card">
                  <FaTrophy className="prize-icon" />
                  <h3>{prize.position}</h3>
                  <p>{prize.prize}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MarathonInfo; 