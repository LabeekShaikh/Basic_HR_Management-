import React from 'react';

// Make sure to add FontAwesome stylesheet in your index.html or root file:
// <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
// />

const AboutUs = () => {
  const sectionStyle = {
    backgroundImage: `url('/images/colorful-geometric-background-fluid-shapes-composition-minimal-geometric-background-dynamic-shapes-composition-abstract-background-texture-design-banner-dark-background-vector.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', sans-serif",
  };

  const contentStyle = {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '3rem 5rem',
    maxWidth: '825px',
    textAlign: 'center',
    borderRadius: '38px',
    boxShadow: '0 4px 30px rgba(19, 19, 19, 0.61)',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#111',
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '400',
    marginBottom: '2rem',
    color: '#444',
    fontStyle: 'italic',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#222',
    lineHeight: '1.8',
    marginBottom: '2.5rem',
  };

  const quoteStyle = {
    fontStyle: 'italic',
    color: '#666',
    fontSize: '1rem',
    marginBottom: '3rem',
  };

  const iconsStyle = {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    color: '#f5c518',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: '#f5c518',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#222',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(245, 197, 24, 0.4)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    marginTop: '1rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={subtitleStyle}>Passion-driven innovation & excellence in every step</p>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu.
        </p>

        <p style={quoteStyle}>
          “Our mission is to create value through innovative solutions that empower people and
          communities.”
        </p>

        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e6b916')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5c518')}
          onClick={() => alert('Thanks for your interest!')}
        >
          Learn More
        </button>

        <div style={iconsStyle}>
          <i
            className="fab fa-facebook-f"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3b5998';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f5c518';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          <i
            className="fab fa-twitter"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1DA1F2';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f5c518';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          <i
            className="fab fa-linkedin-in"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0077b5';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f5c518';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          <i
            className="fab fa-instagram"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E4405F';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f5c518';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
