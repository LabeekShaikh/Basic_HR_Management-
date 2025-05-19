import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <Wrapper>
      <BubblesBackground>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        ))}
      </BubblesBackground>

      <FormContainer>
        <LeftPanel>
          <form className="form">
            <h2>Welcome back!</h2>
            <p className="subtext">Enter your credentials to access your account</p>

            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span className="link">Forgot password?</span>
            </div>

            <button type="submit" className="submit-button">Sign In</button>

            <div className="separator">OR</div>

            <button className="signup-button">Sign up</button>
          </form>
        </LeftPanel>

        <RightPanel>
          <Overlay />
        </RightPanel>
      </FormContainer>
    </Wrapper>
  );
};

// STYLED COMPONENTS

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0f172a;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  overflow: hidden;
`;

const FormContainer = styled.div`
  width: 920px;
  height: 560px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-top: 20px;
  }

  .subtext {
    font-size: 15px;
    color: #6b7280;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .input-group label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .input-group input {
    height: 46px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 15px;
    transition: border-color 0.3s;
  }

  .input-group input:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #6b7280;
  }

  .link {
    color: #6366f1;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.2s;
  }

  .link:hover {
    color: #4f46e5;
  }

  .submit-button, .signup-button {
    height: 48px;
    background: #6366f1;
    width: 200px;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
    display: block;
    margin: 0 auto;
  }

  .submit-button:hover, .signup-button:hover {
    background: #4f46e5;
  }

  .separator {
    text-align: center;
    font-size: 13px;
    color: #000;
    margin: -6px 0;
  }

  .signup-text {
    font-size: 14px;
    text-align: center;
    color: #6b7280;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  position: relative;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-image: url('/images/pngtree-liquid-abstract-colorful-background-form-image_386556.jpg');
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(99, 102, 241, 0.3);
`;

// Animated Bubbles
const BubblesBackground = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  .bubble {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: animateBubble 8s ease-in-out infinite;
  }

  .bubble:nth-child(1) {
    left: 5%;
    top: 20%;
    zoom: 0.4;
    animation-delay: 0s;
  }

  .bubble:nth-child(2) {
    left: 70%;
    top: 10%;
    zoom: 0.5;
    animation-delay: -4s;
  }

  .bubble:nth-child(3) {
    left: 20%;
    top: 70%;
    zoom: 0.3;
    animation-delay: -6s;
  }

  .bubble:nth-child(4) {
    left: 80%;
    top: 80%;
    zoom: 0.45;
    animation-delay: -3s;
  }

  .bubble:nth-child(5) {
    left: 40%;
    top: 40%;
    zoom: 0.6;
    animation-delay: -5s;
  }

  .bubble::before, .bubble::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
  }

  .bubble::before {
    top: 50px;
    left: 45px;
    width: 30px;
    height: 30px;
  }

  .bubble::after {
    top: 80px;
    left: 80px;
    width: 20px;
    height: 20px;
  }

  .bubble span {
    position: absolute;
    border-radius: 50%;
  }

  .bubble span:nth-child(1) {
    inset: 10px;
    border-left: 15px solid #0fb4ff;
    filter: blur(8px);
  }

  .bubble span:nth-child(2) {
    inset: 10px;
    border-right: 15px solid #ff4484;
    filter: blur(8px);
  }

  .bubble span:nth-child(3) {
    inset: 10px;
    border-top: 15px solid #ffeb3b;
    filter: blur(8px);
  }

  .bubble span:nth-child(4) {
    inset: 30px;
    border-left: 15px solid #ff4484;
    filter: blur(12px);
  }

  .bubble span:nth-child(5) {
    inset: 10px;
    border-bottom: 10px solid #fff;
    filter: blur(8px);
    transform: rotate(330deg);
  }

  @keyframes animateBubble {
    0%, 100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
  }
`;

export default Form;
