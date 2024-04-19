import React, { useEffect, useRef, useState } from 'react';
import totalStateImg from "@/assets/total-state-img.png";
import "./fourth-section-brand-landing-design.scss";

const Section = () => {
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
      <div className="section0">
        <div className="item1">
          <h2>Track revenue, ROI and optimize in real time</h2>
          <div className="paragraphs">
            <p>Real Time Analysis</p>
            <p>Interaction Leaderboard</p>
            <p>Customizable Report</p>
            <p>Budget Tracking</p>
            <p>And More</p>
          </div>
        </div>
        <div className="item2">
          <div className="image-container">
            <div className="image-container2">
              <img src={totalStateImg} alt="Total State" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
