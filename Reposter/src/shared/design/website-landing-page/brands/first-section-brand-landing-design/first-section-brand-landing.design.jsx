import React, { useState, useEffect, useRef } from 'react';
import './first-section-brand-landing-design.scss';
import * as materialModules from "@/shared/modules/material";
import { useSpring, animated, config } from '@react-spring/web';
import CountUp from 'react-countup';
import brandGirlImg from "@/assets/brandGirlImg.png";
import gifFile from "@/assets/top1.jpeg";
import DonutChart from 'react-donut-chart';


const FirstSectionBrandLandingDesign = () => {
    const backgroundImages = ["#6E33B0", "#FF6868", "#2D3250"];
    const textShadows = [
        "rgb(131, 36, 182)"
    ];
    const [stateList, setStateList] = useState([
        {
            stateNumber: "20%",
            stateTitle: "Deals",
            start: 0,
            end: 20,
            format: "percentage"
        },
        {
            stateNumber: "2000$",
            stateTitle: "Cost per Views",
            start: 0,
            end: 2000,
            format: "dollar"
        },
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTextShadowIndex, setTextShadowIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [costCount, setCostCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
            setTextShadowIndex((prevIndex) => (prevIndex + 1) % textShadows.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < 117) {
                setCount((prevCount) => prevCount + 1);
            }
        }, 20);

        return () => clearInterval(intervalId);
    }, [count])

    useEffect(() => {
        const targetValue = 0.05;
        const intervalId = setInterval(() => {
            if (costCount < targetValue) {
                setCostCount((prevCount) => prevCount + 0.001);
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, [costCount]);

    const [animation, setAnimation] = useState(false);

    const handleClick = () => {
        setAnimation(true);
    };

    useEffect(() => {
        if (animation) {
            setTimeout(() => {
                setAnimation(false);
            }, 1000);
        }
    }, [animation]);

    const slideAnimation = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
        immediate: !animation,
    });

    // Check if the animation should be triggered on page load
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const isRefreshed = urlParams.get('refreshed');
        if (isRefreshed) {
            setAnimation(true);
        }
    }, []);


    return (
      <div className="section003">
              {/* <div className="section3"> */}


        <animated.div style={slideAnimation} className="item11">
          <h2>Sales Sky High</h2>
          <h2>Ad Cost Bye-Bye</h2>
          <h2>Welcome to Reposter!</h2>

          <div className="paragraphsss">
            <p>Ditch the ad drama, embrace the sales boom with us</p>
            <button className='sign-up-brand-btn1'>SIGN UP</button>

          <button className='book-a-call-btn1'>BOOK A CALL</button>
          </div>
        </animated.div>
            <div className="images-with-state-section-creator">
                <img src={gifFile} alt="GIF" className='creator-background-image-container' />
                <div className="container-of-card-f-section-second-c">
                    <materialModules.Card className='first-section-card-state-brand'>
                        <materialModules.CardContent className="hi">
                            <div className='show-card-state-creator'>
                                {stateList.map((state, index) => (
                                    <div key={index}>
                                        {state.format === 'percentage' && <CountUp className=" show-cost-per show-card-state-heading" start={0} end={117} duration={0.8} delay={1} suffix='%' />}
                                        {state.format === 'dollar' && <span className="show-cost-per">0.5 $</span>}
                                        <p className="show-card-state-paragraph">{state.stateTitle}</p>
                                    </div>
                                ))}

                            </div>
                        </materialModules.CardContent>
                    </materialModules.Card>
                </div>
            </div>
          </div>
    );
}

export default FirstSectionBrandLandingDesign;
