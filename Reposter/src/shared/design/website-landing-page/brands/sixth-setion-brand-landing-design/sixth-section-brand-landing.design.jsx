import React, { useState, useEffect, useRef } from 'react';
import './sixth-section-brand-landing-design.scss';
import socialMediaStateImg from '@/assets/image 9.png';

const Section3 = () => {
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsSectionVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`section ${isSectionVisible ? 'animate-section' : ''}`} ref={sectionRef}>
      <div className="section2">
        <div className="item1">
          <h2>Streamline Automate Campaign Management</h2>
          <div className="paragraphs">
            <p>Create Social Media Challenges</p>
            <p>Chat with your Customers/Reporters</p>
            <p>Bulk Insight Tasks</p>
            <p>Track sales and ROI</p>
            <p>Automate rewards</p>
            <p>And More</p>
          </div>
        </div>
        <div className="item2">
          <div className="image-container3">
            <div className="image-container">
              <img src={socialMediaStateImg} alt="Total State" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
