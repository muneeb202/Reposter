import React, { useState, useEffect, useRef } from 'react'
import "./fifth-section-creator-landing-design.scss";
import * as materialModules from "@/shared/modules/material";

import arrow13Img from "@/assets/Arrow-13.png";
import tiktokImg from "@/assets/tik-tok.png";
import facebookImg from "@/assets/facebook-card.png";
import intagramImg from "@/assets/instagram-card.png";
import youtubeImg from "@/assets/youtube-card.png";
import shopifyImg from "@/assets/shopify.png";
import amazonImg from "@/assets/amazon.png";

const FifthSectionCreatorLandingDesign = () => {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(targetRef.current);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return (
        <section style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", justifyContent: "center" }} >
                <img src={arrow13Img} alt="" ref={targetRef} className={`animated-container ${isVisible ? 'fade-in' : ''}`} />
                <div>
                    <h2 className="our-integration-heading h22">Our integrations</h2>
                    <p className="sub-text-description">
                        These smart integrations are the foundation of a smooth user experience and effective promotion strategy for everyone who chooses our platform.
                    </p>
                </div>
            </div>
            <materialModules.Card className="show-social-media-icons-list">
                <div className="parant-row-one-social-medias">
                    <div className="row-one-social-medias">
                        <img src={tiktokImg} alt="" className='social-icon-image-row-one' />
                        <img src={facebookImg} alt="" className='social-icon-image-row-one' />
                        <img src={intagramImg} alt="" className='social-icon-image-row-one' />
                    </div>
                    <div className="row-one-social-medias">
                        <img src={tiktokImg} alt="" className='social-icon-image-row-one' />
                        <img src={facebookImg} alt="" className='social-icon-image-row-one' />
                        <img src={intagramImg} alt="" className='social-icon-image-row-one' />
                    </div>
                </div>
                <div className="parant-row-one-social-medias">
                    <div className="row-two-social-medias">
                        <img src={youtubeImg} alt="" className='social-icon-image-row-one' />
                        <img src={shopifyImg} alt="" className='social-icon-image-row-one' />
                        <img src={amazonImg} alt="" className='social-icon-image-row-one' />
                        <img src={shopifyImg} alt="" className='social-icon-image-row-one' />
                    </div>
                    <div className="row-two-social-medias">
                        <img src={youtubeImg} alt="" className='social-icon-image-row-one' />
                        <img src={shopifyImg} alt="" className='social-icon-image-row-one' />
                        <img src={amazonImg} alt="" className='social-icon-image-row-one' />
                        <img src={shopifyImg} alt="" className='social-icon-image-row-one' />
                    </div>
                </div>
            </materialModules.Card>
            <div className="get-started-fifth-creation-div">
                <materialModules.Button className="get-started-fifth-creation-btn">Get Started</materialModules.Button>
            </div>
        </section>
    )
}

export default FifthSectionCreatorLandingDesign