import React from 'react';
import './About.css';

// Data for the About Us page
const federationDetails = {
  name: "Adjarian Obstacle Sports Federation (AOSF)",
  mission: "To unite athletes of all levels and ages, providing opportunities for physical development, community building, and promoting healthy, active lifestyles. Whether you're an experienced runner or a newcomer, AOSF strives to offer exciting events that challenge and inspire.",
  description: "AOSF is a member-based, not-for-profit organization that promotes Ninja Sports, Obstacle Course Racing (OCR), trail running, and adventure racing in the Adjara region. Founded by OCR enthusiasts and professionals, our Federation now organizes a variety of events from obstacle races to scenic trail runs and traditional road races.",
  goals: [
    "Collaborate with key stakeholders to unify the obstacle and running sports community in Georgia.",
    "Represent the needs of athletes by organizing safe, affordable, and fair race events, whether on the road, trail, or obstacle courses.",
    "Be inclusive of all organizations, brands, and partners, fostering growth within the community.",
    "Work with event organizers to ensure maximum safety, operational excellence, and fairness in all competitions.",
    "Host national and international championships, elevating Georgia as a premier destination for running and obstacle sports.",
    "Promote trail running, road racing, and obstacle sports in schools and universities to inspire the next generation of athletes.",
    "Provide structured training programs, certified coaches, and camps to help athletes reach their full potential.",
  ],
  team: [
    { title: "President", name: "Archil Manvelidze" },
    { title: "Vice-President", name: "David Zurabashvili" },
    { title: "Treasurer", name: "Simon Beridze" },
    { title: "General Secretary", name: "Olga Vakhrusheva" },
  ],
};

const About = () => {
  const { name, mission, description, goals, team } = federationDetails;

  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">{name}</h1>
      </header>

      <section className="about-mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="about-text">{mission}</p>
      </section>

      <section className="about-description">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">{description}</p>
      </section>

      <section className="about-goals">
        <h2 className="section-title">Our Goals</h2>
        <ul className="goal-list">
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </section>

      <section className="about-team">
        <h2 className="section-title">Our Team</h2>
        <ul className="team-list">
          {team.map((member, index) => (
            <li key={index}>
              <strong>{member.title}:</strong> {member.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
