import React from 'react'
import "./third-section-creator-landing.design.scss";

import arrowImg from "@/assets/Arrow-05.jpg";
import imgSectionThreeImg from "@/assets/images-section-three.jpg";
import SectionThreeImg from "@/assets/creator-third-section-vector.svg";


const ThirdSectionCreatorLandingDesign = () => {
    return (
        <section>
            <div className="main-div-section-three-container">
                <div className='text-padding-creator-section' style={{  }}>
                    <h2 className="section-three-creator-heading h22">
                        The results that creators and reporters can achieve
                    </h2>
                    <p className="section-three-creator-description">From uncovering untold stories to shaping the cultural landscape, this exploration underscores
                        the significant influence of those dedicated to pushing boundaries and achieving impactful results.
                    </p>
                    <img src={arrowImg} alt="" className='arrow-img-section-three' />
                </div>
                <div className="section-three-creator-main-img-c">
                    <img src={imgSectionThreeImg} alt="" className='main-img-section-three'/>
                </div>
            </div>

        </section>
    )
}

export default ThirdSectionCreatorLandingDesign;