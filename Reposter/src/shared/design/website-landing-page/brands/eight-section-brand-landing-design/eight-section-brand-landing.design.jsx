import React, { useState, useEffect, useRef } from 'react'
import "./eight-section-brand-landing-design.scss";
import * as materialModules from "@/shared/modules/material";

import vectorImg from "@/assets/Vector.svg";

const EightSectionBrandLandingDesign = () => {
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
            <div className='background-vector-img' style={{
                display: "flex", justifyContent: "center", backgroundImage: `url(${vectorImg})`
            }} >
                <div className='show-text-eight-section-container'>
                <h2 className="brand-our-integration-heading-brand">Industry-leading brand safety</h2>
                <h4 className="brand-our-integration--child-heading-brand">Ditch the ad drama, embrace the sales boom with us!</h4>

                </div>
            </div>
        </section>
    )
}

export default EightSectionBrandLandingDesign