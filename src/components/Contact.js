import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRunning, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple simulation of form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Auto-hide message
  };

  return (
    <Wrapper>
      <div className="contact-container">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">Any questions or remarks? Just write us a message!</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="email" placeholder="Enter a valid email address" required />
            <input type="text" placeholder="Enter your Name" required />
          </div>
          <textarea placeholder="Write your message..." required rows="5" />
          <button type="submit" className="submit-btn">Submit</button>
          {submitted && <p className="success-msg">Message sent successfully!</p>}
        </form>
      </div>

      <div className="info-section">
        <div className="info-card">
          <div className="icon"><FaRunning /></div>
          <h3>About Club</h3>
          <p>Running Guide</p>
          <p>Workouts</p>
        </div>
        <div className="info-card">
          <div className="icon"><FaPhoneAlt /></div>
          <h3>Phone (Landline)</h3>
          <p>+912 3 567 8987</p>
          <p>+912 5 252 3336</p>
        </div>
        <div className="info-card">
          <div className="icon"><FaMapMarkerAlt /></div>
          <h3>Our Office Location</h3>
          <p>The Interior Design Studio Company</p>
          <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
        </div>
      </div>

      <div className="social-section">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;

const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: #fff;
  padding: 60px 20px;

  .contact-container {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 72px;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: #333;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 36px;
  }

  .form {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .form-row input, textarea {
    flex: 1;
    padding: 14px 16px;
    border-radius: 25px;
    border: 1px solid #ccc;
    font-size: 1rem;
    background-color: #f9f9f9;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    resize: none;
  }

  textarea {
    border-radius: 15px;
    width: 100%;
  }

  .submit-btn {
    align-self: center;
    width: 40%;
    max-width: 200px;
    padding: 14px;
    background-color: #00bcd4;
    color: #ffffff;
    font-size: 1rem;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    transition: background 0.3s ease;
    box-shadow: 0 4px 12px rgb(0 1 212 / 56%);
  }

  .submit-btn:hover {
    background-color: #0097a7;
  }

  .success-msg {
    color: green;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
  }

  .info-section {
    display: flex;
    justify-content: space-around;
    gap: 0px;
    flex-wrap: wrap;
    background: #e0f7fa;
    padding: 26px 95px;
    border-radius: 85px;
    margin-top: 60px;
  }

  .info-card {
    background-color: #ffffff;
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    padding: 25px 20px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-5px);
  }

  .icon {
    background-color: #00bcd4;
    color: white;
    width: 60px;
    height: 60px;
    margin: 0 auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
  }

  .info-card h3 {
    font-weight: 600;
    margin: 12px 0 8px;
    color: #222;
  }

  .info-card p {
    margin: 4px 0;
    color: #555;
    font-size: 0.95rem;
  }

  .social-section {
    margin-top: 60px;
    text-align: center;
  }

  .social-section h2 {
    color: #333;
    margin-bottom: 20px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .social-icons a {
    color: #00bcd4;
    font-size: 1.5rem;
    transition: color 0.3s;
  }

  .social-icons a:hover {
    color: #007c91;
  }

  @media (max-width: 600px) {
    .form-row {
      flex-direction: column;
    }

    .submit-btn {
      width: 100%;
    }

    .info-section {
      flex-direction: column;
      align-items: center;
    }

    .info-card {
      width: 90%;
    }
  }
`;
