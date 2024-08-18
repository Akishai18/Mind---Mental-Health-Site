import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/education');
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>HEALING AWAITS</h1>
      <p>Discover Your Path to Wellness</p>
      <div className='hero-btns'>
        <button className='transparent-button' onClick={handleGetStartedClick}>
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
