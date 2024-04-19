import React, { useState, useEffect ,useRef} from 'react';
import "./fifth-section-brand-landing-design.scss";
// import videoThumbnailImg from "@/assets/video-thumbnail.png";
import gifFile from "@/assets/a1.gif";


const Section2 = () => {
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
      <div className="section1">
      <div className="item1">
        <h2>Interactive demo and Short Clip Here</h2>
        <div className="paragraphsss">
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Phasellus accumsan, velit a feugiat 
            faucibus, justo libero lacinia felis, vel gravida libero 
            sapien id nisi. Donec sed mauris nec ipsum maximus fermentum. 
            Pellentesque habitant morbi tristique senectus et netus et 
            malesuada fames ac turpis egestas. Integer lacinia justo a augue porta, 
            ut posuere mi fermentum. Duis porta mauris et magna ultrices, non tempor nisi consequat</p>

        </div>
      </div>
      <div className="item2">
        <div className="image-container1">
        <div className="image-container">

        <img src={gifFile} alt="GIF" className='image01' />
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section2;
