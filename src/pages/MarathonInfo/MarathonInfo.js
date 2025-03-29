import React from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaTrophy,
  FaMoneyBillWave,
  FaRoute,
  FaMedal,
  FaTshirt,
  FaWater,
  FaFirstAid,
  FaParking,
  FaBus,
} from "react-icons/fa";
import { IoEnterSharp } from "react-icons/io5";

import { GiPathDistance } from "react-icons/gi";
import PageHeader from "../shared/PageHeader";
import "./MarathonInfo.css";
import { useLanguage } from "../../context/LanguageContext";
import IMG from "./../../assets/1200 X 600.png";
import { IoIosWater } from "react-icons/io";
import { MdCelebration } from "react-icons/md";
import IMG1 from "./../../assets/logo0.jpg"
import IMG2 from "./../../assets/logo1.jpg"
import IMG3 from "./../../assets/logo2.jpg"
import IMG4 from "./../../assets/logo3.jpeg"
import IMG5 from "./../../assets/logo4.jpeg"
import IMG6 from "./../../assets/logo5.jpeg"

const MarathonInfo = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  // This would typically come from an API or database
  const marathonInfo = {
    id: parseInt(id),
    title: t("tbilisiHalfMarathon"),
    date: t("may20"),
    time: t("tenAM"),
    location: "Batumi, Georgia",
    distance: "250m-3 km",
    price: "75₾",
    participants: 200,
    prize: "1000₾",
    image: IMG,
    description: t("tbilisiHalfMarathonDescfull"),
    course: {
      start: t("boulvard"),
      finish: t("boulvard"),
      // elevation: 'Flat to moderate',
      // surface: 'Paved roads and paths',
      highlights: [
        t("boulvard1"),
        t("boulvard2"),
        t("boulvard3"),
        t("boulvard4"),
        t("boulvard5"),
        t("boulvard6"),

      ],
    },
    schedule: [
      // { time: '06:00 AM', activity: 'Registration opens' },
      // { time: '07:00 AM', activity: 'Bag drop opens' },
      // { time: '07:30 AM', activity: 'Warm-up session' },
      { time: "", activity: "Race schedule will be announced soon" },
      // { time: '11:00 AM', activity: 'Race Starts' },
      // { time: '12:00 PM', activity: 'Post-race celebration' }
    ],
    amenities: [
      {
        icon: FaMedal,
        title: t("finisherMedal"),
        description: "Custom-designed medal for all finishers",
      },
      {
        icon: IoEnterSharp,
        title: "Free entrance",
        description: "Free entrance to the Botanical garden",
      },
      ,
      { icon: FaRoute, title: t("scenicroute"), description: "Beautiful nature" },
      { icon: MdCelebration, title: t("postRace"), description: "celebration of kids day" },

      // { icon: FaWater, title: 'Water Stations', description: 'Every 5km with sports drinks' },
      // { icon: FaFirstAid, title: 'Medical Support', description: 'Full medical team on course' },
      // { icon: FaParking, title: 'Free Parking', description: 'Designated parking areas' },
      // { icon: FaBus, title: 'Shuttle Service', description: 'To and from key locations' }
    ],

    partners: [
        {
          image: IMG1,
          title: 'Ninja Fight',
        },
        {
          image: IMG2,
          title:'avaliani',
        },
        {
          image: IMG3,
          title: 'Citrus',
        },
        {
          image: IMG5,
          title:'botanical Garden'
        },
    ],
    mediaPartners: [
      {
        image: IMG4,
        title:'My Batumi'

      },
      {
        image: IMG6,
        title:' Yes Batumi'
      },
  ],
    registration: {
      deadline: "28.05.2025",
      price: {
        early: "50₾ (Sold Out)",
        regular: "60₾",
        late: "70₾",
      },
      includes: [
        "Race entry",
        "finisher Medal",
        "hydration",
        "prizes",
        "scenic route",
        "post Race celebration",
      ],
    },
   
  };

  return (
    <div className="marathon-info-container">
      <PageHeader title={marathonInfo.title} />

      <div className="container">
        <div className="marathon-hero">
          <img
            src={marathonInfo.image}
            alt={marathonInfo.title}
            className="marathon-hero-image"
          />
          <div className="marathon-hero-overlay">
            <div className="marathon-hero-content">
              <h1>{marathonInfo.title}</h1>
              <div className="marathon-hero-details">
                <span>
                  <FaCalendarAlt /> {marathonInfo.date}
                </span>
                <span>
                  <FaClock /> {marathonInfo.time}
                </span>
                <span>
                  <FaMapMarkerAlt /> {marathonInfo.location}
                </span>
                <span>
                  <FaUsers /> {marathonInfo.participants} participants
                </span>
                <span>
                  {" "}
                  <GiPathDistance />
                  {marathonInfo.distance}
                </span>
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
            <h2>Race Information</h2>
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
                    <h3>Race Profile</h3>
                    <p>Elevation: {marathonInfo.course.elevation}</p>
                    <p>Surface: {marathonInfo.course.surface}</p>
                  </div>
                </div>
              </div>
              <div className="course-highlights">
                <h3>RACE CATEGORIES & AGE GROUPS </h3>
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
            <h2>Partners: </h2>
            <div className="amenities-grid-image">
              {marathonInfo.partners.map((partner, index) => (
                <div key={index} className="amenity-card-image">
                  <img src={partner.image} />
                </div>
              ))}
            </div>
          </section>
          <section className="marathon-section">
            <h2>Media Partners: </h2>
            <div className="amenities-grid-image">
              {marathonInfo.mediaPartners.map((partner, index) => (
                <div key={index} className="amenity-card-image">
                  <img src={partner.image} />
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
