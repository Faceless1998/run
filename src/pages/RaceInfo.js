// src/RaceInfo.js

import React from "react";
import "./RaceInfo.css";
import raceImage from "./../assets/1200 X 600.png"; // Ensure the correct image path

// Data for the race
const raceDetails = {
  title: "Batumi Botanical Garden Race",
  date: "Celebrate Children's Day with us on June 1st and create unforgettable memories!",
  location: "Batumi Botanical Garden",
  overview: `
  Join us for an exciting obstacle course race in the stunning Batumi Botanical Garden! Organised by the Adjarian Obstacle Sports Federation, this event is designed for kids and youth, combining fun, physical challenges, and the beauty of nature. 
  With categories for ages 2-15 and various race distances, participants will enjoy thrilling obstacles inspired by popular games. Celebrate Children's Day with us on June 1st and create unforgettable memories!
  
  
  Free entrance to the Botanical garden for participants and 1 accompanying person.
`,
  categories: [
    { emoji: "🏃", label: "Early Bird Tickets – 50 ₾" },
    { emoji: "🏃‍♀️", label: "Registrational Tickets – 60 ₾" },
    { emoji: "🏃‍♂️", label: "Late Registrational Tickets – 70 ₾" },
  ],
  prizes:
    "Medals for the top three finishers in each category. All participants will receive a medal and a race t-shirt.",
  registrationInfo: {
    deadline: "June 1, 2025",
    link: "https://tkt.ge/show/21677/batumis-botanikuri-baghis-rbola",
    linkText: "Registration tickets are non-deferrable to another event and non-refundable. The registration can be transferred to another racer until May 25. After this date, it is not possible to transfer your registration. The universal transfer fee is 10 Lari.",
  },
  testimonial: {
    quote: "The Marathon is an unforgettable experience!",
    author: "Kakhi Kakhidze",
  },
  previousResultsLink: "/previous-results",
};

// Main RaceInfo component
const RaceInfo = () => {
  const {
    title,
    date,
    location,
    overview,
    categories,
    prizes,
    registrationInfo,
    testimonial,
    previousResultsLink,
  } = raceDetails;

  return (
    <div className="race-info-container">
      <header className="race-header">
        <h1 className="race-title">{title}</h1>
        <img src={raceImage} alt="City Marathon" className="race-image" />
      </header>

      <div className="race-details">
        <section className="race-overview">
          <h2 className="race-subtitle">Race Overview</h2>
          <div className="race-meta">
            <p className="meta-text">
              <strong>Date:</strong> {date}
            </p>
            <p className="meta-text">
              <strong>Location:</strong> {location}
            </p>
          </div>
          <p className="race-description">{overview}</p>
        </section>

        <section className="race-additional-info">
          <h3 className="section-title">Categories</h3>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index}>
                {category.emoji} {category.label}
              </li>
            ))}
          </ul>
          <h3 className="section-title">Prizes</h3>
          <p className="prize-text">{prizes}</p>
          <h3 className="section-title">Registration</h3>
          <p className="registration-text">
            Early bird registration is open until{" "}
            <strong>{registrationInfo.deadline}</strong>.
            <a href={registrationInfo.link} className="race-link">
              {" "}
              {registrationInfo.linkText}
            </a>
            .
          </p>
        </section>
      </div>

      <blockquote className="race-testimonial">
        "{testimonial.quote}" - <strong>{testimonial.author}</strong>
      </blockquote>

      <section className="race-previous-results">
        <h3 className="section-title">Previous Results</h3>
        <p className="previous-results-text">
          Check out last year's results{" "}
          <a href={previousResultsLink} className="race-link">
            here
          </a>
          .
        </p>
      </section>

      <div className="cta-section">
        <a href={registrationInfo.link} className="cta-button">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default RaceInfo;
