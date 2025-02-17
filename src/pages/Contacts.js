import React from "react";
import "./Contacts.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            We’d love to hear from you! Contact us through any of the following methods.
          </p>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span className="contact-text">+123 456 7890</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">contact@example.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-text">123 Main Street, City, Country</span>
          </div>

          <button className="contact-button">Send a Message</button>
        </div>

        <div className="contact-map">
          <h2 className="map-title">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.134297713115!2d-122.419415684681!3d37.77492927975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b07a0b2f1%3A0xa0d2d52a5e920f97!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1648563454784!5m2!1sen!2sus"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
